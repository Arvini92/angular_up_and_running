import { Routes, RouterModule } from '@angular/router';

import { NewItemFormComponent } from './new-item-form.component';
import { NewItemListComponent } from './new-item-list.component';

const appRoutes: Routes = [
    { path: 'add', component: NewItemFormComponent },
    { path: ':medium', component: NewItemListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);