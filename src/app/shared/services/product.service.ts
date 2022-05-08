import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  collectionName = 'Products';

  constructor(private afs: AngularFirestore) { }

  getProductFromData(id: string) {
    return this.afs.collection<Product>(this.collectionName).doc(id).valueChanges();
  }

  addProduct(product: Product) {
    product.id = this.afs.createId();
    return this.afs.collection<Product>(this.collectionName).doc(product.id).set(product);

  }

  updateProduct(product: Product) {
    return this.afs.collection<Product>(this.collectionName).doc(product.id).set(product);
  }

  deleteProduct(product: Product){
    return this.afs.collection<Product>(this.collectionName).doc(product.id).delete();
  }

  getProducts(){
    return this.afs.collection<Product>(this.collectionName).valueChanges();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
