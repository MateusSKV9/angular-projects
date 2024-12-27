import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Animals2Service {
  constructor() {}

  getAnimals2() {
    return [
      { name: 'Onça', tamanho: 'grande' },
      { name: 'Leão', tamanho: 'grande' },
      { name: 'Lobo', tamanho: 'Médio' },
      { name: 'Capivara', tamanho: 'Pequeno' },
    ];
  }
}
