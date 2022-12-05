import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IDoctor } from 'src/app/models/Doctor';
import { ScheduleConsultService } from 'src/app/services/schedule-consult.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-schedule-exam',
  templateUrl: './schedule-exam.component.html',
  styleUrls: ['./schedule-exam.component.css'],
})
export class ScheduleExamComponent implements OnInit {
  specialities = [
    'Dermatologia',
    'Neurologia',
    'Cardiologia',
    'Ortopedia',
    'Oftalmologia',
  ];
  addresses = ['Av. Paulista, 820', 'Av. Brigadeiro Faria Lima, 1200'];

  doctors: IDoctor[] = [
    {
      name: 'Lucas Namekusa',
      speciality: 'Dermatologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 250,
      schedule: [
        '05/12/2022 12:30',
        '05/12/2022 17:20',
        '06/12/2022 10:30',
        '08/12/2022 13:00',
      ],
    },
    {
      name: 'Pedro Yachura',
      speciality: 'Dermatologia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 180,
      schedule: ['05/12/2022 12:00', '05/12/2022 17:00', '10/12/2022 19:00'],
    },
    {
      name: 'Rodrigo Martinelii',
      speciality: 'Dermatologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 150,
      schedule: ['05/12/2022 12:00', '05/12/2022 17:00', '16/12/2022 11:30'],
    },
    {
      name: 'Iuri Mashiro',
      speciality: 'Neurologia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 350,
      schedule: ['05/12/2022 10:30', '05/12/2022 13:00', '12/12/2022 12:30'],
    },
    {
      name: 'Alisson Stroid',
      speciality: 'Neurologia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 200,
      schedule: ['05/12/2022 11:20', '05/12/2022 15:30', '13/12/2022 11:30'],
    },
    {
      name: 'Marcia Lima',
      speciality: 'Neurologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 290,
      schedule: ['05/12/2022 08:40', '05/12/2022 14:40', '05/12/2022 17:30'],
    },
    {
      name: 'Ana Mashiro',
      speciality: 'Cardiologia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 230,
      schedule: ['05/12/2022 11:30', '05/12/2022 17:00', '10/12/2022 12:30'],
    },
    {
      name: 'Isabela Cardoso',
      speciality: 'Cardiologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 120,
      schedule: ['05/12/2022 12:00', '05/12/2022 17:00', '12/12/2022 12:50'],
    },
    {
      name: 'Marcos Silva',
      speciality: 'Cardiologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 180,
      schedule: ['05/12/2022 07:40', '05/12/2022 12:30', '09/12/2022 08:30'],
    },
    {
      name: 'Kevin Ito',
      speciality: 'Ortopedia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 250,
      schedule: ['05/12/2022 11:00', '05/12/2022 17:35', '08/12/2022 10:30'],
    },
    {
      name: 'Nicolas Alvares',
      speciality: 'Ortopedia',
      local: 'Av. Paulista, 820',
      consultingPrice: 190,
      schedule: ['05/12/2022 15:45', '05/12/2022 17:00', '17/12/2022 11:30'],
    },
    {
      name: 'Gabriel Antunes',
      speciality: 'Ortopedia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 270,
      schedule: ['05/12/2022 12:00', '05/12/2022 17:00', '11/12/2022 12:30'],
    },
    {
      name: 'Monica Ferrari',
      speciality: 'Oftalmologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 300,
      schedule: ['05/12/2022 10:00', '05/12/2022 12:00', '07/12/2022 15:30'],
    },
    {
      name: 'Julia Jahrmann',
      speciality: 'Oftalmologia',
      local: 'Av. Brigadeiro Faria Lima, 1200',
      consultingPrice: 420,
      schedule: ['05/12/2022 12:55', '05/12/2022 14:30', '06/12/2022 11:30'],
    },
    {
      name: 'Antonio Nunes',
      speciality: 'Oftalmologia',
      local: 'Av. Paulista, 820',
      consultingPrice: 390,
      schedule: ['05/12/2022 16:30', '05/12/2022 19:00', '15/12/2022 16:50'],
    },
  ];

  selectedSpeciality = '';

  selectedDoctor: IDoctor = {
    name: '',
    consultingPrice: 0,
    local: '',
    schedule: [''],
    speciality: '',
  };
  selectedLocal = '';

  selectedSchedule = '';

  response: any;

  constructor(
    private fb: FormBuilder,
    private scheduleConsult: ScheduleConsultService,
    private snackBar: SnackBarService
  ) {}
  resetData = () => {
    this.selectedSpeciality = '';
    this.selectedDoctor = {
      name: '',
      consultingPrice: 0,
      local: '',
      schedule: [''],
      speciality: '',
    };
    this.selectedLocal = '';
    this.selectedSchedule = '';
  };
  ngOnInit(): void {
    this.resetData();
  }

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

    this.scheduleConsult.scheduleConsult(formData).subscribe(
      (response) => {
        this.response = response;
        this.snackBar.openSnackBar('Consulta agendada com sucesso!', 'Ok');
        this.resetData();
      },
      (error) => {
        this.snackBar.openSnackBar('Horário indisponível', 'Ok');
      }
    );
  };
}
