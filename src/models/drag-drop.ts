// Drag & Drop Interfaces
namespace App {
  export interface Draggable {
    dragStartHamdler(event: DragEvent): void;

    dragEndHandler(event: DragEvent): void;
  }

  export interface DtagTarget {
    dragOverHamdler(event: DragEvent): void;

    dropHandler(event: DragEvent): void;

    dragLeaveHandler(event: DragEvent): void;
  }
}


