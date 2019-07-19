import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';

@NgModule({
    declarations: [BoardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        DragDropModule,
    ]
})
export class BoardModule {
}
