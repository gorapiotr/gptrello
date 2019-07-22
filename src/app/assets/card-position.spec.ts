import {TestBed} from '@angular/core/testing';
import {computePosition} from './card-position';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Card} from '../models/card/card.model';
import {List} from '../models/list/list.model';

describe('CardPosition', () => {

    it('get bottom value', () => {

        const event = {
            currentIndex : 1,
            container : {
                data : [
                    {id: '5d35fa5bda71295cb2dcb4ce', name: 'doing1', desc: '', pos: 65535}
                ]
            }
        } as CdkDragDrop<Card[]>;

       const list = {
                id: '5d35fa4a11e9943132060169',
                name: 'Done',
                cards: [
                    {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
                    {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 131071}
                ]
            } as List;


        const value = computePosition(event, list);

        expect(value).toEqual('bottom');
    });

    it('get top value', () => {

        const event = {
            currentIndex : 0,
            container : {
                data : [
                    {id: '5d35fa5bda71295cb2dcb4ce', name: 'doing1', desc: '', pos: 65535}
                ]
            }
        } as CdkDragDrop<Card[]>;

        const list = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 65535},
            ]
        } as List;


        const value = computePosition(event, list);

        expect(value).toEqual('top');
    });

    it('get top value', () => {

        const event = {
            currentIndex : 1,
            container : {
                data : [
                    {id: '5d35fa5bda71295cb2dcb4ce', name: 'done1', desc: '', pos: 10000},
                    {id: '5d35fa563f669a85a6aa7aa8', name: 'done2', desc: '', pos: 20000},
                    {id: '5d35fa563f669a85a6aa7aa5', name: 'done3', desc: '', pos: 40000}
                ]
            }
        } as CdkDragDrop<Card[]>;

        const list = {
            id: '5d35fa4a11e9943132060169',
            name: 'Done',
            cards: [
                {id: '5d35fa50374fc31f85426734', name: 'done1', desc: '', pos: 10000},
            ]
        } as List;


        const value = computePosition(event, list);

        expect(value).toEqual('25000');
    });
});
