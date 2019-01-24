import { Component } from '@angular/core';
import { NewItemService } from './new-item.service';

@Component({
  selector: 'new-media-item-list',
  templateUrl: 'new-item-list.component.html',
  styleUrls: ['new-item-list.component.css']
})
export class NewItemListComponent {
  title ='';
  newItems =[];

  constructor(private newItemService: NewItemService) {}

  ngOnInit() {
    this.getNewItems(this.title);
  }

  onNewItemDelete(newItem) {
    this.newItemService.delete(newItem)
      .subscribe(() => {
        this.getNewItems(this.title);
      });
   }
  onNewItemAdd(newItem) { }

  getNewItems(title) {
    this.title = title;
    this.newItemService.get(title)
      .subscribe(newItems => {
        this.newItems = newItems;
      });
  }

}
