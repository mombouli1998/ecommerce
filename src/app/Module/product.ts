

export class product{
    id: number;
    titre:String;
    image:any;
    prix:number;
    quantite:number;
    like:number;
    Categorie:String;
    constructor(id:number,
        titre:String,
        image:any,
        prix:number,
        quantite:number,
        like:number,
        Categorie:String,){
            this.id=id;
            this.Categorie=Categorie;
            this.titre=titre;
            this.image=image;
            this.like=like;
            this.prix=prix;
            this.quantite=quantite;
}
}