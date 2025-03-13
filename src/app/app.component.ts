import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaComponent } from "./components/tarea/tarea.component";
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaComponent, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoDragAndDrop';
}
