import { Injectable } from "@angular/core";

import { Card } from "src/app/model/Card";

@Injectable({
  providedIn: "root"
})
export class PileService {
  pileId: string;
  cards: Card[] = [];
  cardRow: Card[] = [];

  constructor() {}

  setPile(pile) {
    this.pileId = pile.deck_id;
    this.cards = pile.piles.newPile.cards;
  }

  getRowCards(index) {
    if (this.cards.length != 0) {
      this.cardRow = [];
      for (let i = 0; i < 7; i++) {
        this.cardRow.push(this.cards[7 * index + i]);
      }
    }
    return this.cardRow;
  }

  shuffle(index) {
    let oldCards: Card[] = this.cards;
    this.cards = [];

    switch (index) {
      case 0:
      for(let i = 7; i < 14; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 2; i < 7; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 15; i < 21; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 8; i < 14; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 0; i < 7; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 16; i < 21; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 9; i < 14; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 1; i < 7; i+=3) {
        this.cards.push(oldCards[i]);
      }

      for(let i = 14; i < 21; i+=3) {
        this.cards.push(oldCards[i]);
      }

      console.log(this.cards);
      

      case 1:

      case 2:
    }
  }
}
