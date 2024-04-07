import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authenticated = this.authService.isAuthenticated();
    if (typeof localStorage !== 'undefined') {
      // Se o localStorage estiver disponível, você pode usá-lo aqui
    } else {
      // Caso contrário, você pode tomar alguma outra ação ou fornecer uma mensagem de erro
    }

    if(authenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false
    }
    
  }
  
}