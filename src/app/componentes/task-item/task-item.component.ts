import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();
  fatimes = faTimes;

  onDelete(task: Tarefa) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Tarefa) {
    console.log(task.id);
    this.onToggleConcluido.emit(task);
  }

 
}
