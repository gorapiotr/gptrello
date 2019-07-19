import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = 'https://api.trello.com/1/';
        const credentials = '?key=3cf13498269a313a31eb2e71156504e9&token=c474ea0bbb2349897680c53eaf2232050cc1dcf4e503332b89fc9a63c3c20f29';

        const customReq = request.clone({
            url: url + request.url + credentials
        });

        console.log(customReq);

        return next.handle(customReq)
            .catch((err: HttpErrorResponse) => {
                let errMsg: string;
                const errorResponse = JSON.stringify(err.error) || err.message;
                errMsg = `${err.status} - ${err.statusText || ''} Details: ${errorResponse}`;
                console.log(errMsg);

                if (err.status === 401) {

                }

                return ErrorObservable.create(err.error);
            });
    }
}
