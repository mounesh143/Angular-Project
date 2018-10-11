import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

         @Injectable()
         export class CanActivateRouteGuard implements CanActivate {
          canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
              console.log('dummy guard clause for User search');
              return true;
          }
      }