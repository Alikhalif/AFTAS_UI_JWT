import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { CompititionListComponent } from './Pages/Compitition/compitition-list/compitition-list.component';
import { CreateCompititionComponent } from './Pages/Compitition/create-compitition/create-compitition.component';
import { MemberListComponent } from './Pages/Member/member-list/member-list.component';
import { MemberCreateComponent } from './Pages/Member/member-create/member-create.component';
import { StartCompititionComponent } from './Pages/Hunting/start-compitition/start-compitition.component';
import { CreateHuntingComponent } from './Pages/Hunting/create-hunting/create-hunting.component';
import { PodiumComponent } from './Pages/podium/podium.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { authenticationGuardGuard } from './Guards/authentication-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page',
    data: {
      roles: ['USER','MEMBER', 'JURY', 'ADMIN'],
    },
  },

  //login
  {
    path: 'auth/login',
    component: LoginComponent,
    title: 'Login',
    
  },

  {
    path: 'auth/register',
    component: RegisterComponent,
    title: 'Register',
    data: {
      showAuth: true,
    },
  },

  //compitition
  {
    path: 'compitition-list',
    component: CompititionListComponent,
    title: 'Compitition List',

    canActivate: [authenticationGuardGuard],
    data: {
      roles: ['MEMBER', 'JURY', 'ADMIN'],
    },

  },
  {
    path: 'compitition-create',
    component: CreateCompititionComponent,
    title: 'Compitition Create',
    canActivate: [authenticationGuardGuard],
    data: {
      roles: ['JURY', 'ADMIN'],
    },
  },

  //member
  {
    path: 'member-list',
    component: MemberListComponent,
    title: 'Member List',
    canActivate: [authenticationGuardGuard],
    data: {
      roles: ['ADMIN'],
    },
  },

  {
    path: 'member-create',
    component: MemberCreateComponent,
    title: 'Member Create',
    canActivate: [authenticationGuardGuard],
    data: {
      roles: ['ADMIN'],
    },
  },

  //hunting
  {
    path: 'compitition-start',
    component: StartCompititionComponent,
    title: 'Compitition Start' ,
    canActivate:[authenticationGuardGuard],
    data: {
      roles: ['JURY', 'ADMIN'],
    },

  },
  {
    path: 'hunting-create/:code',
    component: CreateHuntingComponent,
    title: 'Hunting Create',
    canActivate:[authenticationGuardGuard],
    data: {
      roles: ['JURY', 'ADMIN'],
    },
  },

  //podium
  {
    path: 'podium/:code',
    component: PodiumComponent,
    title: 'Podium',
    canActivate:[authenticationGuardGuard],
    data: {
      roles: ['JURY', 'ADMIN'],
    },
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
