import { HttpInterceptorFn } from '@angular/common/http';


export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  if (localStorage.getItem('usertoken')!== null){

    req = req.clone({
      setHeaders:{ token : localStorage.getItem('usertoken')!}
    })


  }


  return next(req);
};
