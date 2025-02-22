import { Component } from '@angular/core';
import { HeaderComponent } from "./componentes/header/header.component";
import { TasksComponent } from "./componentes/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarefas';
}
