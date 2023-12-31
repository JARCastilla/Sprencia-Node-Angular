import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate {


  constructor(private router : Router ) {}

     //Guard para para dar permisos a la solicitud de reseteo de password
    canActivate(): boolean | UrlTree {
      let email: string | null = localStorage.getItem('token');

      if (email === 'email')
      {
        this.router.navigate(['/actividades']);
        return false;
      }
      return true;
    }

  
}
