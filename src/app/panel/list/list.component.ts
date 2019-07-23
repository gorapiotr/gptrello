import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../models/list/list.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Card} from '../../models/card/card.model';
import {CardService} from '../../services/card/card.service';
import {computePosition} from '../../assets/card-position';
import {SnotifyService} from 'ng-snotify';
import {ListService} from '../../services/list/list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    @Input() list: List;
    @Input() lists: List[];

    constructor(private cardService: CardService,
                private notifyService: SnotifyService,
                private listService: ListService
    ) {
    }

    get listIds(): string[] {
        return this.lists.map(list => list.id);
    }

    onCardDrop(event: CdkDragDrop<Card[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }

        const list: List = this.lists.find((listElement: List) => {
            return !!listElement.cards.find(card => card.id === event.container.data[event.currentIndex].id);
        });

        const position = computePosition(event, list);

        this.cardService.updateCardPosition(event.container.data[event.currentIndex].id, list.id, position)
            .subscribe(
                () => {
                    this.updateCardPosValue();
                },
                () => {
                },
                () => {
                });
    }

    attachToList(card: Card) {
        this.list.cards.push(card);
        this.updateCardPosValue();
    }

    removeCardFromList(id: string) {
        this.list.cards = this.list.cards.filter((card: Card) => {
            return card.id !== id;
        });
    }

    updateCardPosValue() {
        this.listService.getCards(this.list.id).subscribe((data: any[]) => {
            this.list.cards = this.list.cards.map((card: Card) => {
                const cardObj = data.find( (val) => {
                    return val.id === card.id;
                });

                if (cardObj) {
                    card.pos = cardObj.pos;
                }

                return card;
            });
            this.notifyService.success('Position updated');
        });
    }
}
