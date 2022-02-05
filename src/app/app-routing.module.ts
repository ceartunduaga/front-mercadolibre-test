import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [{
  path: '', component: SearchBoxComponent,
  children: [
      {path: 'items', component: ListItemComponent, pathMatch: 'full'},
      {path: 'items/:id', component: DetailItemComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
