import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../Module/product';
import { ProduitServiceService } from '../Service/produit-service.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 
prod: product;
ListP:product[];
  constructor(private rout :ActivatedRoute,private ProduitS:ProduitServiceService) { 
    this.ProduitS.ProduitListe.subscribe((Lis:product[])=>{
      this.ListP=Lis;
    });
    this.prod=this.ListP[this.rout.snapshot.params.id-1];

  }

  ngOnInit(): void {
  // this.prod=new product();
   
    }
    decremente(){
      this.prod.quantite--;
    }
    incremente(){
      this.prod.like++;
    }
}
