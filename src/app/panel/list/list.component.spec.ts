import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CardComponent} from '../card/card.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {AddCardComponent} from '../add-card/add-card.component';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent,
                CardComponent,
                CardDialogComponent,
                AddCardComponent],
            imports: [
                SharedModule,
                HttpClientModule
            ],
            providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
