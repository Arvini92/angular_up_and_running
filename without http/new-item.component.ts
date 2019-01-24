import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-item ',
  templateUrl: 'new-item.component.html',
  styleUrls: ['new-item.component.css']
})
export class NewItemComponent {

  @Input() newItem;
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();

  onDelete(){
    this.delete.emit(this.newItem);
  }
  onAdd(){
    this.add.emit(this.newItem);
  }

 }
