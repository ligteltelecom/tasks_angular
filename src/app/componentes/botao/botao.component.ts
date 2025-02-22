import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  @Input() texto: string = '';
  @Input() cor: string = '';
  @Output() acao = new EventEmitter();

  onClick() {
    this.acao.emit();
  }
}
