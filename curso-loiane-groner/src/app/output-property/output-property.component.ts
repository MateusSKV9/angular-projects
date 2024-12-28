import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  decrementar() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  incrementar() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
