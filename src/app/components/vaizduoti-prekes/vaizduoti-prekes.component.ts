import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PrekesService} from "../../services/prekes.service";
import { Prekes } from '../../prekes';

@Component({
  selector: 'app-vaizduoti-prekes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaizduoti-prekes.component.html',
  styleUrl: './vaizduoti-prekes.component.css'
})
export class VaizduotiPrekesComponent {
  public prekes:Prekes[]=[];
  public pavadinimas:String="";
  public kiekis:Number=0;

  public constructor(private prekesService:PrekesService) {
    this.prekes=this.prekesService.prekes;
  }

  public istrinti(i:number) {
    this.prekesService.pasalintiPreke(i);
  }

  public istrinti_viska() {
    this.prekesService.pasalintiViska();
  }
}
