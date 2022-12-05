import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { ScheduleExamComponent } from './pages/schedule-exam/schedule-exam.component';
import { MySchedulesComponent } from './pages/my-consultation/my-schedules.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { FaqComponent } from './pages/faq/faq.component';
const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'cadastro', component: SignupComponent },

  {
    path: 'home',
    component: MasterComponent,
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      {
        path: 'pagina-inicial',
        component: HomeComponent,
      },
      {
        path: 'agendar-consulta',
        component: ScheduleExamComponent,
      },
      {
        path: 'meus-agendamentos',
        component: MySchedulesComponent,
      },
      {
        path: 'login',
        component: SignupComponent,
      },
      {
        path :'quem-somos',
        component: QuemSomosComponent,
      },
      {
        path: 'faq',
        component: FaqComponent
      }
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
