import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from "../input-property/input-property.component";
import { OutputPropertyComponent } from "../output-property/output-property.component";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule, InputPropertyComponent, OutputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImage: string =
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  nome2!: string;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

  pessoa: any = {
    nome: 'Def',
    idade: 20,
    endereco: {
      cidade: 'Jequié',
      estado: 'Bahia',
    }
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Clicou');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  salvarValorInput(valor: string) {
    this.nome2  = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    alert(evento.novoValor);
  }
}
