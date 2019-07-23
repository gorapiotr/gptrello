import { Injectable } from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService extends Service {

  protected url = 'lists/';

  constructor(protected httpService: HttpClient) {
    super(httpService);
  }

  getCards(listId: string) {

    return this.httpService.get(`${this.url}${listId}/cards`,
        {
          params: {
            fields: 'id,pos'
          }
        });
  }

}
