import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-dialog-scheduling',
  templateUrl: './dialog-scheduling.component.html',
  styleUrls: ['./dialog-scheduling.component.css']
})
export class DialogSchedulingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.selectedSpeciality = localStorage.getItem('specialization')!;
    this.selectedLocal = localStorage.getItem('local')!;

  }

   doctors : IDoctor[] = require('../../utils/data.json');

   specialities = [
    'Dermatologia',
    'Neurologia',
    'Cardiologia',
    'Ortopedia',
    'Oftalmologia',
  ];
  addresses = ['Av. Paulista, 820', 'Av. Brigadeiro Faria Lima, 1200'];

  selectedDoctor: IDoctor = {
    name: '',
    consultingPrice: 0,
    local: '',
    schedule: [''],
    speciality: '',
  };
  selectedLocal = '';

  selectedSchedule = '';

  selectedSpeciality = '';

  response: any;

  formatDate = () => {
    let day = this.selectedSchedule.slice(0, 2);
    let month = this.selectedSchedule.slice(3, 5);
    let year = this.selectedSchedule.slice(6, 10);
    let hour = this.selectedSchedule.slice(11, 16);
    return `${month} ${day} ${year} ${hour}`;
  };

  filterDoctorsBySpeciality = (speciality: string, local: string) => {
    return this.doctors.filter(
      (doctor) => doctor.speciality === speciality && doctor.local === local
    );
  };

  findDoctor = () => {
    return this.doctors.filter(
      (doctor) => doctor.name === this?.selectedDoctor?.name || ''
    );
  };

  disabledSelect = () => {
    if (
      this.selectedDoctor.name == '' ||
      !this.selectedLocal ||
      !this.selectedSchedule ||
      !this.selectedSpeciality
    ) {
      return true;
    }
    return false;
  };

  saveConsult = () => {
    const formData = {
      scheduling: {
        id: '',
        specialization: this.selectedSpeciality,
        local: this.selectedLocal,
        doctor: this.selectedDoctor.name,
        price: this.selectedDoctor.consultingPrice,
        date: new Date(this.formatDate()),
        user: localStorage.getItem('cpf'),
      },
      token: localStorage.getItem('token'),
    };
  };

}
