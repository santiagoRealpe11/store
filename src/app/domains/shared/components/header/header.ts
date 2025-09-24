import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Cart } from '../../services/cart';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  hideSideMenu = signal(true);
  private cartService = inject(Cart);
  cart = this.cartService.cart;
  total = this.cartService.total;
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
