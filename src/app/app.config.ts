import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { CountdownModule } from 'ngx-countdown';
import { NgCircleProgressModule } from 'ng-circle-progress';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch(),withInterceptors([loadingInterceptor,headerInterceptor])),
    importProvidersFrom(NgxSpinnerModule ,CountdownModule,NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300})),
    provideAnimations()
  ]
};
