import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../Module/product';
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  ProduitListe: BehaviorSubject<product[]>=new BehaviorSubject([
    new product(
      1,
  "chemise Polo",
  "../../../assets/Image/chemisePolo.web",
  100,
  5,
    0,  "homme",),
   new product(
      2,
  "Djean",
  "../../../assets/Image/djeanFemme.jpeg",
  100,
  5,
    0,  "femme",),
    new product(
      3,
  "Marnière",
  "../../../assets/Image/marnièreSport.jpeg",
  100,
  5,
    0,  "homme",),
  ])
  constructor() { }
  AddProduit(produc:product[]):void{
    const currentValue=this.ProduitListe.value;
    if(currentValue && currentValue.length){
      this.ProduitListe.next(currentValue.concat(produc));
    }
    else{
      this.ProduitListe.next(produc);
    }
  }
 

}

