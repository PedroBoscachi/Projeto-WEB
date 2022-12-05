import { IDoctor } from 'src/app/models/Doctor';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MySchedulingsService } from 'src/app/services/my-schedulings.service';

@Component({
  selector: 'app-dialog-scheduling',
  templateUrl: './dialog-scheduling.component.html',
  styleUrls: ['./dialog-scheduling.component.css'],
})
export class DialogSchedulingComponent implements OnInit {
  constructor(private scheduleConsult: MySchedulingsService) {}

  ngOnInit(): void {
    const date = localStorage.getItem('dateTime')!;

    this.selectedSpeciality = localStorage.getItem('specialization')!;
    this.selectedLocal = localStorage.getItem('local')!;
    this.selectedDoctor = this.doctors.find(
      (doctor) => doctor.name == localStorage.getItem('doctor')
    ) || {
      name: '',
      consultingPrice: 0,
      local: '',
      schedule: [''],
      speciality: '',
    };

    this.selectedSchedule = `${this.formatDateLocal(
      date.toString().substring(0, 10)
    )} ${this.formatHour(date.toString().substring(11, 16))}`;
  }

  doctors: IDoctor[] = require('../../utils/data.json');

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
        id: localStorage.getItem('id'),
        specialization: this.selectedSpeciality,
        local: this.selectedLocal,
        doctor: this.selectedDoctor.name,
        price: this.selectedDoctor.consultingPrice,
        date: new Date(this.formatDate()),
        user: localStorage.getItem('cpf'),
      },
      token: localStorage.getItem('token'),
    };

    this.scheduleConsult.updateSchedule(formData).subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        console.log('');
      }
    );
  };

  formatDateLocal = (date: string) => {
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);

    return `${day}/${month}/${year}`;
  };

  formatHour = (hour: string) => {
    const hours = +hour.slice(0, 2);
    const minutes = hour.slice(3, 5);
    return `${hours - 3}:${minutes}`;
  };
}
