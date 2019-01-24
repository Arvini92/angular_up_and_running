import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item.component';
import { NewItemListComponent } from './new-item-list.component';
import { NewItemFormComponent } from './new-item-form.component';
import { NewItemService } from './new-item.service';

const lookupList = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    NewItemComponent,
    NewItemListComponent,
    NewItemFormComponent
  ],
  providers: [
    NewItemService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}