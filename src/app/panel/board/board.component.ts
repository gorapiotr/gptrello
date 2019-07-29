import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {List} from '../../models/list/list.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    public lists: List[];

    constructor(private boardService: BoardService) {
    }

    ngOnInit() {
        this.getBoard();
    }

    getBoard() {
        this.boardService.getBoard().subscribe(
            (data: List[]) => {
                this.handleResponse(data);
            },
            () => {
                // error handling in interceptor
            }
        );
    }

    handleResponse(data: List[]) {
        this.lists = data;
    }

    onListDrop(event: CdkDragDrop<List[]>) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
}
