import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PridetiPrekesComponent} from "./components/prideti-prekes/prideti-prekes.component";
import {VaizduotiPrekesComponent} from "./components/vaizduoti-prekes/vaizduoti-prekes.component";
import {InfoPrekesComponent} from "./components/info-prekes/info-prekes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PridetiPrekesComponent, VaizduotiPrekesComponent, InfoPrekesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pirkiniu_Sarasas';
}
