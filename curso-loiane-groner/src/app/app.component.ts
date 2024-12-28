import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponentComponent } from "./meu-primeiro-component/meu-primeiro-component.component";
import { CursosComponent } from "./cursos/cursos.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MeuPrimeiroComponentComponent, CursosComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-loiane-groner';
}
