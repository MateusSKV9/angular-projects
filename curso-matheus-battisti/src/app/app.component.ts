import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@gamil.com',
    role: 'Admin'
  }

  title = 'curso-matheus-battisti';
}
