import {TestBed} from '@angular/core/testing';

import {BoardService} from './board.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from '../../interceptors/main.interceptor';
import {List} from '../../models/list/list.model';

describe('BoardService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ],
        providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
    }));

    it('should be created', () => {
        const service: BoardService = TestBed.get(BoardService);
        expect(service).toBeTruthy();
    });

    it('get all lists with cards', () => {

        const lists: List[] = [
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
        ];
        const service: BoardService = TestBed.get(BoardService);

        service.getBoard().subscribe((data: List[]) => {
            expect(data).toEqual(lists);
        });
    });
});
