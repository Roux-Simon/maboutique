import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: any;
afficher: boolean =false;



product2 = {
  title:"",
  description :"",
  image:"",
  price: 0,
  available: false


}

  constructor(private ps: ProduitsService ) { }

  ngOnInit(): void {
    this.getProduits();
  }
getProduits(){
  this.ps.getProduits().subscribe(data=>{
   
      this.products = data;
      console.log(this.products);
    })
}

supprimer (id:any){

  this.ps.deleteProduit(id).subscribe(( )=>{
    this.getProduits();
    this.afficher=true;
    

  })

}

changeDisponible(product :any) {
  this.ps.disponible(product).subscribe(() => {
    this.getProduits();
    console.log("change available");

  })

}

  search_Price(price: any ){

     this.ps.search_Price(price).subscribe(data => {
       this.products = data;
       console.log("yes")
     }) ;

     
}
search_Keyword(search: any ){

  this.ps.search_Keyword(search.value).subscribe(data => {
    this.products = data;
    console.log("keyword ok")
  }) ;
}

edit_Product (products:any) {

  this.product2 =products;
  

  }
  


  
}

  











