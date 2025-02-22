import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  apiURL = 'http://localhost:3000/tasks';
  http = inject(HttpClient);

  getTasks(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiURL);
  }

  addTask(task: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiURL, task);
  }
  
  updateTask(task: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiURL}/${task.id}`, task);
  }

  deleteTask(task: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.apiURL}/${task.id}`);
  }
} 
