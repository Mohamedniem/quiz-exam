import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const tohomeGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)

  if(localStorage.getItem('usertoken')!==null){
    _Router.navigate(['/mainhome'])
    return false;

  }else{

    return true;
  }
};
