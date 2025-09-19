import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../../data/products.data';
@Component({
  selector: 'app-products',
  imports: [MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private commonService:CommonService, private router:Router){}

  products:Product[]=[];

  ngOnInit(){
    this.getAllProducts()
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
  

  getAllProducts(){
    this.products=this.commonService.productList$().length>0 ? this.commonService.productList$():PRODUCTS;
    console.log(this.products,'Products')
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  addToCart(id: any) {
    // Find the product to update
    const updatedProducts = this.products.map((p:any) => {
      if (p.id === id) {
        // Create a new object for the updated product
        const updatedProduct = {
          ...p,
          inCart: !p.inCart,
          buttonTitle: p.inCart ? 'Add To Cart' : 'Remove From Cart'
        };
  
        // Call the service with the new product state
        if (updatedProduct.inCart) {
          this.commonService.addToCart(updatedProduct);
        } else {
          this.commonService.removeCart(updatedProduct);
        }
        return updatedProduct;
      }
      return p; // Return unchanged products
    });
  
    // Update the component's product list with the new array
    this.products = updatedProducts;
  
    // Notify the service that the main product list has changed
    // The service can then update its own state (e.g., a signal)
    this.commonService.getProductUpdatedList(this.products);
  }

  onResize(event: any) {
    console.log(event);
  }
}
