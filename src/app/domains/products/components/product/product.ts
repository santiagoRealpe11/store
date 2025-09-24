import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '@shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {
  @Input({ required: true }) product!: ProductModel;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
