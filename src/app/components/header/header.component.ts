import { Component, effect } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

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
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  count = 0;
  cartList:any[]=[]
  subtotal=0
  isCartPage = false;

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
