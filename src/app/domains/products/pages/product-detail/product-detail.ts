import { CommonModule } from '@angular/common';
import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class ProductDetail implements OnInit {
  product = signal<ProductModel | null>(null);
  cover = signal('');
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(Cart);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        this.productService.getOne(id).subscribe({
          next: (product) => {
            this.product.set(product);
            if (product.images && product.images.length > 0) {
              this.cover.set(product.images[0]);
            }
          },
          error: (err) => {
            console.error('Error:', err);
          }
        });
      }
    });
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