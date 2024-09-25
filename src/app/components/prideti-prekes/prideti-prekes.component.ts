import { Component } from '@angular/core';
import {PrekesService} from "../../services/prekes.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-prideti-prekes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prideti-prekes.component.html',
  styleUrl: './prideti-prekes.component.css'
})
export class PridetiPrekesComponent {
  public prekes:String[]=[];
  public prekiuKiekis:String[]=[];
  public pavadinimas:String="";
  public kiekis="0";

  public constructor(private prekesService:PrekesService) {
    this.prekes=this.prekesService.prekes;
    this.prekiuKiekis=this.prekesService.prekiuKiekis;
  }

  public pridetiPreke() {
    this.prekesService.pridetiPreke(this.pavadinimas, this.kiekis);
    this.pavadinimas="";
  }
}
