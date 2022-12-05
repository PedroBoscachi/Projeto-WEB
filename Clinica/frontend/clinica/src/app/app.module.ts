import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { SigninComponent } from './pages/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { ScheduleExamComponent } from './pages/schedule-exam/schedule-exam.component';
import { MySchedulesComponent } from './pages/my-consultation/my-schedules.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { DialogDeleteScheduleComponent } from './dialogs/dialog-delete-schedule/dialog-delete-schedule.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { DialogMyProfileComponent } from './dialogs/dialog-my-profile/dialog-my-profile.component';
import { DialogSchedulingComponent } from './dialogs/dialog-scheduling/dialog-scheduling.component';
import { DialogDeleteUserComponent } from './dialogs/dialog-delete-user/dialog-delete-user.component';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MasterComponent,
    ScheduleExamComponent,
    MySchedulesComponent,
    NotFoundComponent,
    DialogMyProfileComponent,
    DialogSchedulingComponent,
    HomeComponent,
    DialogDeleteUserComponent,
    DialogDeleteScheduleComponent,
    QuemSomosComponent,
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
