import { Component } from '@angular/core';
import {PrekesService} from "../../services/prekes.service";
import {FormsModule} from "@angular/forms";
import { Prekes } from '../../prekes';

@Component({
  selector: 'app-prideti-prekes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prideti-prekes.component.html',
  styleUrl: './prideti-prekes.component.css'
})



export class PridetiPrekesComponent {
  public prekes:Prekes[]=[];
  public pavadinimas:String="";
  public kiekis:Number=0;

  public constructor(private prekesService:PrekesService) {
    this.prekes=this.prekesService.prekes;
  }

  public pridetiPreke() {
    this.prekesService.pridetiPreke(this.pavadinimas, this.kiekis);
    this.pavadinimas="";
    this.kiekis=0;
  }
}
