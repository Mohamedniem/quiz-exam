import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from "./core/pages/mainpage/mainpage.component";
import { NgxSpinnerComponent } from 'ngx-spinner';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HomePageComponent } from "./core/layout/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxSpinnerComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'test-app';
}
