import { Component, effect, HostListener } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,
     MatButtonModule,
      MatIconModule,
       MatBadgeModule,
       RouterLink,
       RouterModule,
       CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        animate('600ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ 
        width: '0',
        opacity: 0,
        transform: 'translateX(-20px)'
      })),
      state('*', style({ 
        width: '*',
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        animate('800ms 300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    
  ]
})
export class HeaderComponent {
  count = 0;
  cartList:any[]=[]
  subtotal=0
  isCartPage = false;

  hoverState = 'normal';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hoverState = 'normal';
  }


  constructor(private commonService: CommonService,private router: Router){
    effect(() => {
      const count = this.commonService.cart$();
      this.cartList=this.commonService.productObj$()

      this.count=count;
      console.log('Cart count updated:', count);
      this.subtotal = this.cartList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      console.log('Cart count updated subtotal:', this.subtotal);
    });
    this.router.events.subscribe(() => {
      this.isCartPage = this.router.url === '/cart';
    });
  }
  
}
