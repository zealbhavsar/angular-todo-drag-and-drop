import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, DragDropModule, FormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  todo: string[] = [];
  inProgress: string[] = [];
  done: string[] = [];
  tarea: string='';


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  agregarTarea(){
    if(this.tarea==''){
      return;
    }
    
    this.todo.push(this.tarea);
    this.tarea='';
  }
}
