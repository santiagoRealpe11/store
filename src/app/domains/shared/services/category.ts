import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class Category {
  private http = inject(HttpClient);

  constructor() {}

  getCategories() {
    return this.http.get<CategoryModel[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
