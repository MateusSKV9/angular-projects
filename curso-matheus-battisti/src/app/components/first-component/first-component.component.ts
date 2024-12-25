import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Mateus";
  years: number = 20;
  job: string = "web developer";
  hobbies: string[] = ["Estudar", "Assistir a vídeos", "ler"];
  motorcycle = {
    name: "Cinquentinha Phoenix",
    year: 2013
  }
}
