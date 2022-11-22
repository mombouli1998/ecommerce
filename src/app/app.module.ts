import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ConnexionComponent } from './connexion/connexion.component';




const rout:Routes=[
{ path:'lis', component: ListeProduitsComponent},
{ path: "lis/:id", component:ProduitComponent},
{path:"ajout", component:AddComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,

    ListeProduitsComponent,

    AddComponent,

    ConnexionComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
