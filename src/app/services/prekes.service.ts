import { Injectable } from '@angular/core';
import { Prekes } from '../interfaces/prekes';

@Injectable({
  providedIn: 'root'
})
export class PrekesService {
  public prekes:Prekes[]=[]
  constructor() {
    let tmp=localStorage.getItem("prekes");
    if (tmp != null) {
      this.prekes=JSON.parse(tmp);
    }
  }

  private issaugoti() {
    localStorage.setItem("prekes", JSON.stringify(this.prekes));
  }

  public pridetiPreke(preke:String, kiekis:Number) {
    this.prekes.push({pavadinimas:preke,kiekis:kiekis});
    this.issaugoti();
  }

  public pasalintiPreke(i:number) {
    this.prekes.splice(i,1);
    this.issaugoti();
  }

  public pasalintiViska() {
    this.prekes.length = 0;
    this.issaugoti();
  }
}
