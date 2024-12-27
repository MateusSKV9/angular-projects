import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { Animals2Service } from '../../animals2.service';
import { Animal2 } from '../../Animal2';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  show: boolean = false;
  animals2!: Animal2[];

  constructor(private animals2Service: Animals2Service, private listService: ListService) {
    this.animals2 = this.animals2Service.getAnimals2();

  }

  togleAge(animal: Animal): void {
    animal.showAge = !animal.showAge;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 1, showAge: false },
    { name: 'Tom', type: 'Cat', age: 2, showAge: false },
    { name: 'Frida', type: 'Dog', age: 3, showAge: false },
    { name: 'Bob', type: 'Horse', age: 4, showAge: false },
  ];

}
