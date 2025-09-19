import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonService } from '../../services/common.service';
import { Product, PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  isLoading = true;
  error: string | null = null;
  products:Product[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.loadProductDetails(productId);
      } else {
        this.error = 'Invalid product ID';
        this.isLoading = false;
      }
    });
  }

  loadProductDetails(productId: number): void {
    this.isLoading = true;
    this.error = null;
    
    this.commonService.getProductById(productId).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
          console.log(this.product)
        } else {
          this.error = 'Product not found';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error loading product details';
        this.isLoading = false;
        console.error('Error loading product:', err);
      }
    });
  }


  addToCart(productId: number): void {
    console.log(productId)
    console.log(this.commonService.productList$())
    const product = this.commonService.productList$().find((p:any) => p.id === productId);
    console.log(product)
    if (product) {
      this.commonService.addToCart(product);
    this.products=this.commonService.productList$().length>0 ? this.commonService.productList$():PRODUCTS;

      this.commonService.getProductUpdatedList(this.products);

      this.product.buttonTitle='Remove From Cart'
      this.product.inCart=true
      // Optional: Show a success message or update the UI
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }
}