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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule, MatCard, MatCardHeader, MatCardTitle, MatCardContent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private commonService: CommonService,private router:Router){

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

  onQuantityChange(product: any) {
    // Update the quantity in the service
    console.log(product)
    const updatedProducts = this.cartList.map(p => 
      p.id === product.id ? { ...p, quantity: product.quantity } : p

    );
    
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

  goBack(): void {
    this.router.navigate(['/products']);
  }

  clearCart(){
    this.cartList=[]
    this.commonService.clearCart()
    this.dataSource=this.cartList
    this.message="No items in cart"
  }
}
