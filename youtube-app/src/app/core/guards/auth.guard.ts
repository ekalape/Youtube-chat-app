import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Pathes } from 'src/app/utils/enums';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLogged) {
    return true;
  }
  return router.parseUrl(Pathes.BASE);
};
