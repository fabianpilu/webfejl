import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product'
import { CartService } from '../../shared/services/cart.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  products?: Product[];
  productForm?: boolean;
  isNewProduct?: boolean;
  newProduct?: any = {};
  editProductForm?: boolean;
  editedProduct?: any = {};
  public grandTotal !: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   // this.products = this.getProducts().;
    
    this.productService.getProducts()
    .subscribe(res=>{
      this.products = res;
     // this.grandTotal = this.productService.getTotalPrice();
    })
  }
  removeItem(product: any){
    this.productService.removeCartItem(product);
  }
  emptycart(){
    this.productService.removeAllCart();
  }

  addtocart(product: Product){
    this.productService.addtoCart(product);
  }
  

  getProducts() {
    return this.productService.getProducts();
  }

  showEditProductFrom(product: Product){
    if (!product) {
      this.productForm = false;
      return;
    } else {
      this.editProductForm = true;
      this.editedProduct = product;
    }
  }

  showAddProductForm(){
    if (this.products?.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewProduct = true;
  }

  saveProduct(product: Product){
    if (this.newProduct) {
      this.productService.addProduct(product);
    }
    this.productForm = false;
  }

  updateProduct() {
    this.productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product);

  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

}
