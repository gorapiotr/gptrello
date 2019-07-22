import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardDialogComponent} from './card-dialog.component';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MainInterceptor} from '../../interceptors/main.interceptor';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

describe('CardDialogComponent', () => {
    let component: CardDialogComponent;
    let fixture: ComponentFixture<CardDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardDialogComponent],
            imports: [
                SharedModule,
                HttpClientModule,
                BrowserAnimationsModule,
                SnotifyModule,
            ],
            providers: [
                {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
                SnotifyService,
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: []},
                {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
