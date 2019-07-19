import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardName = 'GPZjmgq1';

  constructor(private http: HttpClient) {
  }

  getBoard() {
    return this.http.get(`boards/${this.boardName}/cards/`);
  }
}
