import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../models/card/card.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {RemoveDialogComponent, RemoveObject} from '../../shared/remove-dialog/remove-dialog.component';
import {CardService} from '../../services/card/card.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() card: Card;
    @Output() removeEmitter: EventEmitter<string> = new EventEmitter();

    constructor(
        private dialog: MatDialog,
        private cardService: CardService
    ) {
    }

    openDialog() {
        const dialog = new MatDialogConfig();

        dialog.minWidth = 600;
        dialog.disableClose = true;
        dialog.autoFocus = true;

        dialog.data = this.card;

        const dialogRef = this.dialog.open(CardDialogComponent, dialog);

        dialogRef.componentInstance.cardEmitter.subscribe((card: Card) => {
                this.card = card;
            },
            () => {
            },
            () => {
            });
    }

    openRemoveDialog() {
        const dialog = new MatDialogConfig();

        dialog.minWidth = 400;
        dialog.disableClose = true;
        dialog.autoFocus = false;

        dialog.data = {
            id: this.card.id,
            name: this.card.name,
            service: this.cardService
        } as RemoveObject;

        const dialogRef = this.dialog.open(RemoveDialogComponent, dialog);

        dialogRef.componentInstance.removeEmitter.subscribe((id: string) => {
                this.removeEmitter.emit(id);
            },
            () => {
            },
            () => {
            });
    }
}
