import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CardComponent} from '../card/card.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {AddCardComponent} from '../add-card/add-card.component';
import {MainInterceptor} from '../../interceptors/main.interceptor';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {List} from '../../models/list/list.model';
import {Card} from '../../models/card/card.model';

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
                HttpClientModule,
                SnotifyModule,
            ],
            providers: [
                {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
                SnotifyService,
                {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('remove element from list', () => {
        component.list = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
                {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071},
                {id: '5d35fa5bda71295cb2dcb4ce', name: 'doing1', desc: '', pos: 65535}
            ]
        } as List;

        const toEqualList = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071},
                {id: '5d35fa5bda71295cb2dcb4ce', name: 'doing1', desc: '', pos: 65535}
            ]
        } as List;

        component.removeCardFromList('5d35fa50374fc31f85426734');

        expect(component.list).toEqual(toEqualList);
    });

    it('add cart to list', () => {

        component.list = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
                {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071},
            ]
        } as List;

        const card: Card = {
            id: '5d35fa5bda71295cb2dcb4ce',
            name: 'doing1',
            desc: '',
            pos: 65535
        } as Card;


        const toEqualList = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
                {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071},
                card
            ]
        } as List;

        component.attachToList(card);

        expect(component.list).toEqual(toEqualList);
    });

    it('get list ids', () => {
        component.lists = [
            {
                id: '5a2998bae30c13a46cf66b77',
                name: 'To do',
                cards: [
                    {id: '5a2998e218c5d481027d9a8a', name: 'todo1', desc: 'description1', pos: 65535}
                ]
            },
            {
                id: '5a2998e9fb659e2cd9f1979c',
                name: 'Doing',
                cards: [
                    {id: '5d35fa5bda71295cb2dcb4ce', name: 'doing1', desc: '', pos: 65535}
                ]
            },
            {
                id: '5d35fa4a11e9943132060169',
                name: 'Done',
                cards: [
                    {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
                    {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071}
                ]
            }
        ] as List[];

        const toEqualIds = ['5a2998bae30c13a46cf66b77', '5a2998e9fb659e2cd9f1979c', '5d35fa4a11e9943132060169'];

        expect(component.listIds).toEqual(toEqualIds);
    });
});
