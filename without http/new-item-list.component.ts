import { Component } from '@angular/core';
import { NewItemService } from './new-item.service';

@Component({
  selector: 'new-media-item-list',
  templateUrl: 'new-item-list.component.html',
  styleUrls: ['new-item-list.component.css']
})
export class NewItemListComponent {
  newItems;

  constructor(private newItemService: NewItemService) {}

  ngOnInit() {
    this.newItems = this.newItemService.get();
  }

  onNewItemDelete(newItem) {
    this.newItemService.delete(newItem);
   }
  onNewItemAdd(newItem) { 
    
  }

}
