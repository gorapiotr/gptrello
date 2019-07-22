import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('CardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
  }));

  it('should be created', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });
});
