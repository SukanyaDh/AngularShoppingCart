import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { signal } from '@angular/core';
import { Product, PRODUCTS } from '../data/products.data';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  private dataValue =  new Subject<string> ()
  data$ = this.dataValue.asObservable();
  private products = signal<Product[]>(PRODUCTS);

  setData(data:any){
    this.dataValue.next(data)
  }

  private cartValue= signal(0)
  private productsObj=signal([])
  private productList=signal<Product[]>(PRODUCTS);
  cart$= this.cartValue.asReadonly()
  productObj$=this.productsObj.asReadonly()
  productList$=this.productList.asReadonly()

  getProducts(): Product[] {
    return this.products();
  }

  // Get product by ID
  getProductById(id: number): Observable<Product | undefined> {
    const product = this.productList().find(p => p.id === id);
    return of(product);
  }


  getProductUpdatedList(newProdList: any) {
    if (newProdList) {
      this.productList.set(newProdList); // Use 'set' to replace the old value with the new one
    }
  }
  
  updateProductList(products:any){
    this.productsObj.update((products:any) => {
      return products.map((p:any) => 
        p.id === products.id 
          ? { ...p, quantity: products.quantity } 
          : p
      );
    });
  }

  addToCart(product?:any){
    
    this.cartValue.update(cart=>cart+1)
    console.log(this.cartValue())
    if (product) {
      this.productsObj.update((products:any) => {
        // Check if product already exists in cart
        const existingIndex = products.findIndex((p:any) => p.id === product.id);
        console.log(existingIndex)
        if (existingIndex === -1) {
          return [...products, { ...product, quantity: 1 }];
        }
        // If product exists, update its quantity
        return products.map((p:any, index:any) => 
          index === existingIndex 
            ? { ...p, quantity: (p.quantity || 1) + 1 } 
            : p
        );
      });
    }

  }
  removeCart(product?: any) {
    this.cartValue.update(cart => Math.max(0, cart - 1));
    const updatedProd= this.productList()
    const updatedProducts = updatedProd.map((p:any) => {
      if (p.id === product.id) {
        return {
          ...p,
          inCart: !p.inCart,
          buttonTitle: p.inCart ? 'Add To Cart' : 'Remove From Cart'
        };
      }
      return p;
    });
    this.getProductUpdatedList(updatedProducts)
    if (product) {
      this.productsObj.update((products: any) => {
        // Filter out the product with the matching id
        return products.filter((p:any) => p.id !== product.id);
      });
    }
  }

  clearCart(){
    console.log(this.getProducts())
    this.cartValue.set(0)
    this.productsObj.set([])
    this.productList.set(PRODUCTS)
  }
}
