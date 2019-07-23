import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board/board.component';
import {ListComponent} from './list/list.component';
import { CardComponent } from './card/card.component';
import {CardDialogComponent} from './card-dialog/card-dialog.component';
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
        SharedModule
    ],
    entryComponents: [
        CardDialogComponent,
        RemoveDialogComponent
    ]
})
export class PanelModule {
}
