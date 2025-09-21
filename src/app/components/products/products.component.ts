import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../../data/products.data';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-products',
  imports: [MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule,
    MatTabsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('800ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('800ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
    trigger('tabChangeAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('50ms', [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductsComponent {

  constructor(private commonService:CommonService, private router:Router){}

  products:Product[]=[];
  @HostBinding('@pageAnimations')
  public animatePage = true;
  totalProducts=-1
  displayedProducts: Product[] = [];
  itemsPerPage = 8; // Number of products to show per page
  currentPage = 1;
  hasMoreProducts = true;
  categories: string[] = [];
  selectedCategory: string = 'All';

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  getCategoryCount(category: string): number {
    if (category === 'All') return this.products.length;
    return this.products.filter(p => p.category === category).length;
  }

  ngOnInit(){
    this.getAllProducts()
    this.categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
    console.log(this.categories);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    this.resetProducts();
  }

  resetProducts() {
    this.displayedProducts = [];
    this.currentPage = 1;
    this.hasMoreProducts = true;
    this.loadMore();
  }
  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
  

  getAllProducts(){
    this.products=this.commonService.productList$().length>0 ? this.commonService.productList$():PRODUCTS;
    this.loadMore();
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

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    
    this.products = (this.commonService.productList$().length > 0 ? 
      this.commonService.productList$() : 
      PRODUCTS).filter(product => 
        product.name.toLowerCase().includes(criteria.toLowerCase()) ||
        product.description.toLowerCase().includes(criteria.toLowerCase())
      );
    
    this.resetProducts();
  }

  loadMore() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    
    // Get filtered products based on current category
    const filtered = this.filteredProducts;
    const newProducts = filtered.slice(startIndex, endIndex);
    
    if (newProducts.length === 0) {
      this.hasMoreProducts = false;
      return;
    }
    
    this.displayedProducts = [...this.displayedProducts, ...newProducts];
    this.currentPage++;
    this.hasMoreProducts = endIndex < filtered.length;
  }

  
}
