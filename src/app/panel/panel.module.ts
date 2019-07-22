import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board/board.component';
import {ListComponent} from './list/list.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardComponent } from './card/card.component';
import {CardDialogComponent} from './card-dialog/card-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { AddCardComponent } from './add-card/add-card.component';
import {SharedModule} from '../shared/shared.module';
import {RemoveDialogComponent} from '../shared/remove-dialog/remove-dialog.component';

@NgModule({
    declarations: [
        BoardComponent,
        ListComponent,
        CardComponent,
        CardDialogComponent,
        AddCardComponent
    ],
    imports: [
        CommonModule,
        //shared module
        SharedModule
    ],
    entryComponents: [
        CardDialogComponent,
        RemoveDialogComponent
    ]
})
export class PanelModule {
}
