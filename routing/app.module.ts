import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item.component';
import { NewItemListComponent } from './new-item-list.component';
import { NewItemFormComponent } from './new-item-form.component';
import { NewItemService } from './new-item.service';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

const lookupList = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NewItemComponent,
    NewItemListComponent,
    NewItemFormComponent
  ],
  providers: [
    NewItemService,
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}