import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RemoveDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatCardModule,
    DragDropModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
