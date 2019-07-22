import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Card} from '../models/card/card.model';
import {List} from '../models/list/list.model';

export const computePosition = (event: CdkDragDrop<Card[]>, list: List): string => {
    switch (event.currentIndex) {
        case(0):
            return 'top';
        case(list.cards.length - 1):
            return  'bottom';
        default:
            return Math.round(
                (+event.container.data[event.currentIndex - 1].pos + +event.container.data[event.currentIndex + 1].pos) / 2
            ).toString();
    }
};
