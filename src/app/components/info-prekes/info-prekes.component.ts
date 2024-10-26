import { Component } from '@angular/core';
import {PrekesService} from "../../services/prekes.service";

@Component({
  selector: 'app-info-prekes',
  standalone: true,
  imports: [],
  templateUrl: './info-prekes.component.html',
  styleUrl: './info-prekes.component.css'
})
export class InfoPrekesComponent {
  public prekiuSkaicius;

  public constructor(private prekesService:PrekesService) {
    this.prekiuSkaicius = prekesService.prekes.length;

    prekesService.onCountChange.subscribe(
      ()=>{
        this.prekiuSkaicius = prekesService.prekes.length;
      }
    )
  }
}
