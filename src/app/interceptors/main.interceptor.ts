import {Injectable, OnDestroy} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';
import {SnotifyService} from 'ng-snotify';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private notifyService: SnotifyService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = 'https://api.trello.com/1/';

        const customReq = request.clone({
            url: url + request.url,
            setParams: {
                key: '3cf13498269a313a31eb2e71156504e9',
                token: 'c474ea0bbb2349897680c53eaf2232050cc1dcf4e503332b89fc9a63c3c20f29',
            },
        });

        customReq.headers.append('Access-Control-Allow-Origin', '*');
        customReq.headers.append('Access-Control-Allow-Credentials', 'true');
        customReq.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        customReq.headers.append('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');

        return next.handle(customReq)
            .catch((err: HttpErrorResponse) => {

                if (err.status === 400) {
                    //this.notifyService.error(err.error.toString());
                }

                return ErrorObservable.create(err.error);
            });
    }
}
