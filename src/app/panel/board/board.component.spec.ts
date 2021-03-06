import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent} from './board.component';
import {AppComponent} from '../../app.component';
import {SharedModule} from '../../shared/shared.module';
import {ListComponent} from '../list/list.component';
import {CardComponent} from '../card/card.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {AddCardComponent} from '../add-card/add-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from '../../interceptors/main.interceptor';

describe('BoardComponent', () => {
    let component: BoardComponent;
    let fixture: ComponentFixture<BoardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BoardComponent,
                ListComponent,
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
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
