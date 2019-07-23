import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('ListService', () => {
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
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });
});
