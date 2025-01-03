import { Component } from '@angular/core';
import { Componente01Component } from './components/componente01/componente01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Componente01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-ralf-lima';
}
