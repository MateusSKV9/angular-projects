import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { Animals2Service } from '../../animals2.service';
import { Animal2 } from '../../Animal2';
import { ListService } from '../../services/list.service'
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  show: boolean = false;
  animals2!: Animal2[];

  animals: Animal[] = [];


  constructor(private animals2Service: Animals2Service, private listService: ListService) {
    this.animals2 = this.animals2Service.getAnimals2();
    this.getAnimals();
  }

  togleAge(animal: Animal): void {
    animal.showAge = !animal.showAge;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals)=> (this.animals = animals));
  }
}
