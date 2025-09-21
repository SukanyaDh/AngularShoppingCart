// src/app/payment/payment.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StripeCardElement, StripeElements, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeService, NgxStripeModule } from 'ngx-stripe';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  standalone: true, // Make sure this is a standalone component if used this way
  imports:[    
    CommonModule,
    ReactiveFormsModule],
  styleUrls: ['./payment.component.scss'] // 'styleUrl' is not a valid property, use 'styleUrls'
})
export class PaymentComponent implements OnInit {
  
  // Use a single ViewChild to reference the container div for the card element.
  @ViewChild('cardElementRef') cardElementRef!: ElementRef;

  cardElement!: StripeCardElement;

  cardOptions: StripeElementsOptions = {
    locale: 'en'
  };

  elements!: StripeElements;
  stripeForm!: FormGroup;
  loading = false;
  paymentSuccess = false;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {
    this.stripeForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    
    // Set the publishable key here for standalone components
    this.stripeService.setKey(environment.stripePublishableKey)

    // Initialize the card element after the component's view has been initialized.
    // Use ngAfterViewInit for this.
  }

  ngAfterViewInit(): void {
    this.initializeCardElement();
  }

  private initializeCardElement(): void {
    this.stripeService.elements(this.cardOptions)
      .subscribe(elements => {
        this.elements = elements;
        
        // Create the card element
        this.cardElement = this.elements.create('card');
          
        // Mount the card element to the native DOM element from the ViewChild reference
        if (this.cardElementRef) {
          this.cardElement.mount(this.cardElementRef.nativeElement);
        }
      });
  }

  createToken(): void {
    this.loading = true;
    const formValue = this.stripeForm.value;
  
    // Pass the correct cardElement instance to createToken
    this.stripeService.createToken(this.cardElement, { name: formValue.name })
      .subscribe({
        next: (result) => {
          this.loading = false;
          if ('token' in result) {
            console.log('Stripe Token:', result.token);
            this.paymentSuccess = true;
          } else if ('error' in result) {
            console.error('Stripe Error:', result.error.message);
            alert(result.error.message);
          }
        },
        error: (err) => {
          this.loading = false;
          console.error('Error creating token:', err);
          alert('An error occurred while processing your payment. Please try again.');
        }
      });
  }
  
  ngOnDestroy() {
    if (this.cardElement) {
      this.cardElement.destroy();
    }
  }
}