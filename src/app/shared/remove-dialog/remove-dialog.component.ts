import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Service} from '../../services/service';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-remove-dialog',
    templateUrl: './remove-dialog.component.html',
    styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent {

    removeObject: RemoveObject;
    @Output() removeEmitter: EventEmitter<string> = new EventEmitter();

    constructor(
        private dialogRef: MatDialogRef<RemoveDialogComponent>,
        @Inject(MAT_DIALOG_DATA) removeObject: RemoveObject,
        private notifyService: SnotifyService
    ) {
        this.removeObject = removeObject;
    }

    remove() {
        this.removeObject.service.remove(this.removeObject.id).subscribe( (data) => {

            this.removeEmitter.emit(this.removeObject.id);
            this.dialogRef.close();
            this.notifyService.success('Element removed successfully');
    });
    }

    close() {
        this.dialogRef.close();
    }
}

export class RemoveObject {
    id: string;
    name: string;
    service: Service;
}
