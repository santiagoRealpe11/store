import { CommonModule } from '@angular/common';
import { Component, signal, Input, inject } from '@angular/core';
import { ProductModel } from '@shared/models/product.model';
import { Cart } from '@shared/services/cart';
import { ProductService } from '@shared/services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = signal<ProductModel | null>(null);
  cover = signal('');
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(Cart);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
