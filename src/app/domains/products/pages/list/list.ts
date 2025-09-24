import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '@products/components/product/product';
import { CommonModule } from '@angular/common';
import { ProductModel } from '@shared/models/product.model';
import { Cart } from '@shared/services/cart';
import { ProductService } from '@shared/services/product';
import { Category } from '@shared/services/category';
import { CategoryModel } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export  class List {
  products = signal<ProductModel[]>([]);
  categories = signal<CategoryModel[]>([]);
  private cartService = inject(Cart);
  private productService = inject(ProductService);
  private categoryService = inject(Category);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }
  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {},
    });
  }
  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {},
    });
  }
}
