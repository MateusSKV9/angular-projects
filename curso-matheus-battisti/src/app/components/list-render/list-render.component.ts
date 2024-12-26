import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    { name: 'Turca', type: 'Dog'},
    { name: 'Tom', type: 'Cat'},
    { name: 'Frida', type: 'Dog'},
    { name: 'Bob', type: 'Horse'},
  ]
}
