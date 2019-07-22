import {TestBed} from '@angular/core/testing';

import {CardService} from './card.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from '../../interceptors/main.interceptor';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

describe('CardService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            SnotifyModule,
        ],
        providers: [
            {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
            SnotifyService,
            {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}]
    }));

    it('should be created', () => {
        const service: CardService = TestBed.get(CardService);
        expect(service).toBeTruthy();
    });
});
