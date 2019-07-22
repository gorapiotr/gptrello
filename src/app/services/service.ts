import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export abstract class Service {

    protected boardName = environment.board;
    protected url: string;

    protected constructor(protected httpService: HttpClient) {
    }

    public remove(id: string) {
        return this.httpService.delete(`${this.url}` + id);
    }

    public toJson<T>(obj: T): { [param: string]: string | string[]; } {
        return JSON.parse(JSON.stringify(obj));
    }
}
