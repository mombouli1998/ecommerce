import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../Module/product';
import { ProduitServiceService } from '../Service/produit-service.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
List:product[];
changer: boolean=false;
p: boolean=true;
produis:product;
produit1:product;
cat:string;
@Input() o:number;
  constructor(private productS: ProduitServiceService) { 
    this.productS.ProduitListe.subscribe((Lis:product[])=>{
      this.List=Lis;
    });
    console.log(this.List);
  }

  ngOnInit(): void {
  
    

  }
une(i:number){
  this.produit1=this.List[i];
  this.changer=true;
  this.p=false;

}
Deux(){
  return this.produit1;
}
Recherche(f:NgForm){
  this.cat=f.value['categorie'];
}
}
