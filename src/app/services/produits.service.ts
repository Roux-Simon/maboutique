import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

getProduits(){
  return this.http.get("http://localhost:3000/products") ;
  }

deleteProduit(id:any){
return this.http.delete("http://localhost:3000/products/"+id);
}


// La methode post a besoin de 2 parametre, le lien et l'argument
Save_prod(produit: any) {
  return this.http.post("http://localhost:3000/products", produit);

}

disponible(product: any) {

  let available = product.available;
  return this.http.patch("http://localhost:3000/products/"+product.id , {available:!available })

}

search_Price(price:any) {
  let min = price.value.min;
  let max = price.value.max;
  return this.http.get("http://localhost:3000/products?price_gte="+ min + "&price_lte=" + max);


}
search_Keyword(search: any){

let keyword = search.value;
  return this.http.get("http://localhost:3000/products?q=" + keyword);


}
}
