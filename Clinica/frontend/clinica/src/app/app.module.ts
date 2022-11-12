import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { ScheduleExamComponent } from './pages/schedule-exam/schedule-exam.component';
import { ResultsComponent } from './pages/results/results.component';
import { MySchedulesComponent } from './pages/my-schedules/my-schedules.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [AppComponent, SigninComponent, SignupComponent, MasterComponent, ScheduleExamComponent, ResultsComponent, MySchedulesComponent, MyProfileComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
