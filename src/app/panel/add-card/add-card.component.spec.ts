import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCardComponent} from './add-card.component';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('AddCardComponent', () => {
    let component: AddCardComponent;
    let fixture: ComponentFixture<AddCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddCardComponent],
            imports: [
                SharedModule,
                HttpClientModule,
                SnotifyModule,
            ],
            providers: [
                {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
                SnotifyService,
                {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
