import {Injectable} from '@angular/core';
import {Service} from '../service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Card} from '../../models/card/card.model';
import {NewCard} from '../../panel/add-card/add-card.component';

@Injectable({
    providedIn: 'root'
})
export class CardService extends Service {

    protected url = 'cards/';

    constructor(protected httpService: HttpClient) {
        super(httpService);
    }

    updateCardPosition(cardId: string, panelId: string, position: string) {

        return this.httpService.put(`${this.url}${cardId}`, {},
            {
                params: {
                    idList: panelId,
                    pos: position.toString()
                }
            });
    }

    updateModel(card: Card) {
        return this.httpService.put(`${this.url}${card.id}/`, {},
            {
                params: JSON.parse(JSON.stringify(card))
            });
    }

    createModel(newCard: NewCard) {
        return this.httpService.post(`${this.url}`, {},
            {
                params: this.toJson<NewCard>(newCard)
            });
    }
}
