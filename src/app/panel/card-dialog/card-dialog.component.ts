import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Card} from '../../models/card/card.model';
import {CardService} from '../../services/card/card.service';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-card-dialog',
    templateUrl: './card-dialog.component.html',
    styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent {

    form: FormGroup;
    card: Card;

    @Output() cardEmitter: EventEmitter<Card> = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CardDialogComponent>,
        private cardService: CardService,
        @Inject(MAT_DIALOG_DATA) card: Card,
        private notifyService: SnotifyService
    ) {

        this.card = card;
        this.createForm();
    }

    private createForm() {
        this.form = this.fb.group({
            id: [this.card.id],
            name: [this.card.name, Validators.required],
            desc: [this.card.desc]
        });
    }

    save() {
        const card = this.form.value as Card;

        this.cardService.updateModel(card).subscribe( (data:any) => {
            this.notifyService.success('Card edited successfully');
        });

        this.cardEmitter.emit(card);

        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
