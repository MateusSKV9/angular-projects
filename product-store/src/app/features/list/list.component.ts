import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
