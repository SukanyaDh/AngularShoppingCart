import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";

@Component({
  selector: 'app-cart',
  imports: [CommonModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private commonService: CommonService){

  }
  cartList:any[]=[]

  displayedColumns: string[] = ['imageUrl','name', 'price', 'quantity','action'];
  dataSource:any;
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  message:string=''

  ngOnInit(){
    this.cartList=this.commonService.productObj$()
    console.log(this.cartList)
    if(this.cartList.length>0){
    this.dataSource=this.cartList
    } else {
      this.message="No items in cart"
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
   this.onQuantityChange(item);
   // this.commonService.addToCart(item)
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.onQuantityChange(item);
    }
    //this.commonService.removeCart(item)
  }

  // Prevent typing non-numeric characters
  onQuantityKeydown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (allowedKeys.includes(event.key)) {
      return true;
    }
    
    // Allow only numbers
    if (event.key.match(/^\d+$/) === null) {
      event.preventDefault();
      return false;
    }
    
    return true;
  }

  onQuantityChange(product: any) {
    // Update the quantity in the service
    console.log(product)
    const updatedProducts = this.cartList.map(p => 
      p.id === product.id ? { ...p, quantity: product.quantity } : p

    );
    // if(action=='inc'){
    //   this.commonService.addToCart(product)
    // } else {
    //   this.commonService.removeCart(product)
    // }
    this.cartList=updatedProducts
    this.commonService.updateProductList(this.cartList)
    
  }

  removeItem(product: any) {
    product.inCart=false
    product.buttonTitle='Add To Cart'
    this.commonService.removeCart(product);
    this.cartList=this.commonService.productObj$()
    if(this.cartList.length>0){
    this.dataSource=this.cartList
    } else {
      this.message="No items in cart"
    }
  }

  calculateSubtotal(): number {
    return this.cartList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
