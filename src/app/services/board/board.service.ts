import {Injectable} from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BoardService extends Service {

    protected url = 'boards/';

    constructor(protected httpService: HttpClient) {
        super(httpService);
    }

    getBoard() {
        return this.httpService.get(`${this.url}${this.boardName}/lists/`, {
            params: {
                cards: 'open',
                card_fields: 'name,desc,pos',
                filter: 'open',
                fields: 'name'
            }
        });
    }
}
