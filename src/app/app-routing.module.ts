import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './panel/board/board.component';

const routes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: '**', redirectTo: 'board', pathMatch: 'full'}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
