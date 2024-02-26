import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { inject } from '@angular/core';

export const authenticationGuardGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router:Router = inject(Router);

  const {roles} = route.data;

  if(roles.includes(authService.getRole())){
    return true;
  }else{
    if(authService.getRole() != undefined){
      router.navigate(["/competitions"]);
      return false;
    }else{
      router.navigate(["/auth/login"]);
      return false;
    }
  }
};
