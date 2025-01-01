import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { FirstComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { PipesComponent } from "./components/pipes/pipes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterModule,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    FirstComponent,
    ListRenderComponent,
    EventosComponent,
    EmitterComponent,
    PipesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@gamil.com',
    role: 'Admin',
  };

  title = 'curso-matheus-battisti';
}
