import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogComponent } from './remove-dialog.component';
import {SharedModule} from '../shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('RemoveDialogComponent', () => {
  let component: RemoveDialogComponent;
  let fixture: ComponentFixture<RemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SnotifyModule,
      ],
      providers: [
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
