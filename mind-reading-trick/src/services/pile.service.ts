import { Injectable } from "@angular/core";

import { Card } from "src/app/model/Card";

@Injectable({
  providedIn: "root"
})
export class PileService {
  pileId: string = "";
  rowOne: Card[] = [];
  rowTwo: Card[] = [];
  rowThree: Card[] = [];
  pickedCard: Card;

  constructor() {}

  setPile(pile) {
    this.pileId = pile.deck_id;
    this.rowOne = [];
    this.rowTwo = [];
    this.rowThree = [];

    for (let i = 0; i < 7; i++) {
      this.rowOne.push(pile.piles.newPile.cards[i]);
      this.rowTwo.push(pile.piles.newPile.cards[i + 7]);
      this.rowThree.push(pile.piles.newPile.cards[i + 14]);
    }
  }

  shuffle(index) {
    let oldOne = this.rowOne;
    let oldTwo = this.rowTwo;
    let oldThree = this.rowThree;
    this.rowOne = [];
    this.rowTwo = [];
    this.rowThree = [];

    switch (index) {
      case 1:
        for (let i = 0; i < 7; i += 3) {
          this.rowOne.push(oldTwo[i]);
          if (i < 6) {
            this.rowTwo.push(oldTwo[i + 1]);
            this.rowThree.push(oldTwo[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowTwo.push(oldOne[i]);
          if (i < 6) {
            this.rowThree.push(oldOne[i + 1]);
            this.rowOne.push(oldOne[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowThree.push(oldThree[i]);
          if (i < 6) {
            this.rowOne.push(oldThree[i + 1]);
            this.rowTwo.push(oldThree[i + 2]);
          }
        }
        break;

      case 2:
        for (let i = 0; i < 7; i += 3) {
          this.rowOne.push(oldOne[i]);
          if (i < 6) {
            this.rowTwo.push(oldOne[i + 1]);
            this.rowThree.push(oldOne[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowTwo.push(oldTwo[i]);
          if (i < 6) {
            this.rowThree.push(oldTwo[i + 1]);
            this.rowOne.push(oldTwo[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowThree.push(oldThree[i]);
          if (i < 6) {
            this.rowOne.push(oldThree[i + 1]);
            this.rowTwo.push(oldThree[i + 2]);
          }
        }
        break;

      case 3:
        for (let i = 0; i < 7; i += 3) {
          this.rowOne.push(oldOne[i]);
          if (i < 6) {
            this.rowTwo.push(oldOne[i + 1]);
            this.rowThree.push(oldOne[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowTwo.push(oldThree[i]);
          if (i < 6) {
            this.rowThree.push(oldThree[i + 1]);
            this.rowOne.push(oldThree[i + 2]);
          }
        }

        for (let i = 0; i < 7; i += 3) {
          this.rowThree.push(oldTwo[i]);
          if (i < 6) {
            this.rowOne.push(oldTwo[i + 1]);
            this.rowTwo.push(oldTwo[i + 2]);
          }
        }
        break;
    }
  }
}
