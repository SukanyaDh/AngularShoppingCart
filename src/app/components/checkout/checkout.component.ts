// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { Product } from '../../data/products.data';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: Product[] = [];
  subtotal: number = 0;
  orderPlaced: boolean = false;
  orderNumber: string = '';

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]],
      paymentMethod: ['credit', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cartItems = this.commonService.productObj$();
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity), 
      0
    );
  }

  placeOrder(): void {
    if (this.checkoutForm.valid) {
      // In a real app, you would send this data to your backend
      this.orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
      this.orderPlaced = true;
      this.commonService.clearCart();
      this.router.navigate(['/payment']);

    } else {
      // Mark all fields as touched to show validation messages
      Object.keys(this.checkoutForm.controls).forEach(field => {
        const control = this.checkoutForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }
}
