import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header/header.component';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';
import { MemberCreateComponent } from './Pages/Member/member-create/member-create.component';
import { StartCompititionComponent } from './Pages/Hunting/start-compitition/start-compitition.component';
import { CreateHuntingComponent } from './Pages/Hunting/create-hunting/create-hunting.component';
import { PodiumComponent } from './Pages/podium/podium.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomInterceptor } from './Interceptor/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompititionListComponent,
    CreateCompititionComponent,
    MemberListComponent,
    MemberCreateComponent,
    StartCompititionComponent,
    CreateHuntingComponent,
    PodiumComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe, {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1300}
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
