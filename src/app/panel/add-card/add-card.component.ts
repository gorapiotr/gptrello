import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../models/card/card.model';
import {CardService} from '../../services/card/card.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  @Input() idList: string;
  @Output() cardEmitter: EventEmitter<Card> = new EventEmitter();
  card: Card;
  form: FormGroup;
  show = false;

  constructor(private fb: FormBuilder,
              private cardService: CardService,
              private notifyService: SnotifyService
  ) {
  }

  private createForm() {
    this.form = this.fb.group({
      name: [this.card.name, Validators.required],
      idList: [this.idList, Validators.required]
    });
  }

  showForm() {
    this.show = !this.show;
    if(this.show) {
      this.card = new Card();
      this.createForm();
    }
  }

  save() {

    const newCard = this.form.value as NewCard;

    this.cardService.createModel(newCard).subscribe( (data: any) => {
      this.card = data as Card;
      this.cardEmitter.emit(this.card);
      this.show = false;
      this.notifyService.success('Card created successfully');
    });
  }
}

export interface NewCard {
  id?: string;
  name: string;
  idList: string;
}
