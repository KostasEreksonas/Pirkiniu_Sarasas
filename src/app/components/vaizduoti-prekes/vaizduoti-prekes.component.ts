import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PrekesService} from "../../services/prekes.service";

@Component({
  selector: 'app-vaizduoti-prekes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaizduoti-prekes.component.html',
  styleUrl: './vaizduoti-prekes.component.css'
})
export class VaizduotiPrekesComponent {
  public prekes:String[]=[];
  public prekiuKiekis:String[]=[];
  public pavadinimas:String="";
  public kiekis=0;

  public constructor(private prekesService:PrekesService) {
    this.prekes=this.prekesService.prekes;
    this.prekiuKiekis=this.prekesService.prekiuKiekis;
  }

  public istrinti(i:number) {
    this.prekesService.pasalintiPreke(i);
  }
}
