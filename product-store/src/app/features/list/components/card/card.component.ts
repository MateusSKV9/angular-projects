import { CommonModule } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/produtc.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>()

  productTitle = computed(() => this.product().title);
}
