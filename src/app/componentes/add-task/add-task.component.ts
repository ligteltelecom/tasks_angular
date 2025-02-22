import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../models/tarefa.model';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule, BotaoComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() newTask = new EventEmitter<Tarefa>();
  mostrarForm: boolean = false;
  tarefa: Tarefa =
    {
      "tarefa": '',
      "categoria": '',
      "concluido": false
    }

  addTask() {
    console.log('Add Task');
  }

  onSubmit() {
    if (this.tarefa.tarefa == '' || this.tarefa.categoria == '') {
      alert('Preencha todos os campos');
      return;
    }

    this.newTask.emit(this.tarefa);
    this.tarefa = {
      "tarefa": '',
      "categoria": '',
      "concluido": false
    }
  }

  alterarVisibilidade() {
    this.mostrarForm = !this.mostrarForm;
  }


}
