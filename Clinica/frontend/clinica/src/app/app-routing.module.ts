import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { ScheduleExamComponent } from './pages/schedule-exam/schedule-exam.component';
import { ResultsComponent } from './pages/results/results.component';
import { MySchedulesComponent } from './pages/my-consultation/my-schedules.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'cadastro', component: SignupComponent },

  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'agendar-exame',
        component: ScheduleExamComponent,
      },
      {
        path: 'resultados',
        component: ResultsComponent,
      },
      {
        path: 'meus-agendamentos',
        component: MySchedulesComponent,
      },
      {
        path: 'meu-perfil',
        component: MyProfileComponent,
      },
      {
        path: 'login',
        component: SignupComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
