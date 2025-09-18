import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../services/common.service';
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

  constructor(private commonService:CommonService){}

  products = [
    {
      id:1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:4,
      name: 'Product 4',
      description: 'Description 4',
      price: 400,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:5,
      name: 'Product 5',
      description: 'Description 5',
      price: 500,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:6,
      name: 'Product 6',
      description: 'Description 6',
      price: 600,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:7,
      name: 'Product 7',
      description: 'Description 7',
      price: 700,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id:8,
      name: 'Product 8',
      description: 'Description 8',
      price: 800,
      buttonTitle:'Add To Cart',
      inCart:false,
      quantity:1,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  ngOnInit(){
    this.getAllProducts()
  }

  getAllProducts(){
    this.products=this.commonService.productList$().length>0 ? this.commonService.productList$():this.products;
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
