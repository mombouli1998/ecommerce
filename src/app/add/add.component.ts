import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { product } from '../Module/product';
import { ProduitServiceService } from '../Service/produit-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add:product;
  addPro: product[];
  public ajoutProd:product[];
  fileToUpload: File | null = null;
  nom:string;
  private subscription: Subscription;

  
 
  constructor(private ProduitS:ProduitServiceService) { 
   
    
  
  }
  ngOnInit(): void {
    this.subscription=this.ProduitS.ProduitListe.subscribe((pro: product[])=>{
      this.ajoutProd=pro;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.nom="../../assets/Image/"+this.fileToUpload.name;
    console.log(this.nom);    
}
  Save(f:NgForm){
    this.add=new product(4,f.value['titre'],this.nom,f.value['prix'],f.value['quantite'],0,f.value['categorie']);
   this.addPro=[];
   
    
    this.addPro.push(this.add);
  
    this.ProduitS.AddProduit(this.addPro);
    
   
  }

}
