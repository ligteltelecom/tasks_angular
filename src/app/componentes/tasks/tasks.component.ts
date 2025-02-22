import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { AddTaskComponent } from "../add-task/add-task.component";
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefaService = inject(TarefaService);
  tasks$!: Observable<Tarefa[]>;



  deleteTask(task: Tarefa) {
    this.tarefaService.deleteTask(task).subscribe(() =>
      this.getTasks());
  }

  updateTask(task: Tarefa) {
    task.concluido = !task.concluido;
    this.tarefaService.updateTask(task).subscribe(() =>
      this.getTasks());
  }

  getTasks() {
    this.tasks$ = this.tarefaService.getTasks();
  }

  addTask(task: Tarefa) {
    this.tarefaService.addTask(task).subscribe(() =>
      this.getTasks());
  }


  ngOnInit() {
    this.getTasks();
  }
}
