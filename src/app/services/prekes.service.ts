import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrekesService {
  public prekes:String[]=[]
  public prekiuKiekis:String[]=[]
  constructor() {
    let tmp=localStorage.getItem("prekes");
    if (tmp != null) {
      this.prekes=JSON.parse(tmp);
    }

    let tmp2=localStorage.getItem("prekiuKiekis");
    if (tmp2 != null) {
      this.prekiuKiekis=JSON.parse(tmp2);
    }
  }

  private issaugoti() {
    localStorage.setItem("prekes", JSON.stringify(this.prekes));
    localStorage.setItem("prekiuKiekis", JSON.stringify(this.prekiuKiekis));
  }

  public pridetiPreke(preke:String, kiekis:String) {
    this.prekes.push(preke);
    this.prekiuKiekis.push(kiekis);
    this.issaugoti();
  }

  public pasalintiPreke(i:number) {
    this.prekes.splice(i,1);
    this.issaugoti();
  }
}
