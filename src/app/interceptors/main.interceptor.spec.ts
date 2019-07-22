import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {MainInterceptor} from './main.interceptor';

describe('Main interceptor', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                SnotifyModule,
            ],
            providers: [
                {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
                SnotifyService,
                {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
            ]
        }).compileComponents();
    }));
});
