/* This Pile Service is responsible by control the user Pile */

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

  // Set user Pile
  setPile(pile) {
    // Gets pile ID for future uses
    this.pileId = pile.deck_id;

    // Initialize rows
    this.rowOne = [];
    this.rowTwo = [];
    this.rowThree = [];

    // Push 7 cards to each row
    for (let i = 0; i < 7; i++) {
      this.rowOne.push(pile.piles.newPile.cards[i]);
      this.rowTwo.push(pile.piles.newPile.cards[i + 7]);
      this.rowThree.push(pile.piles.newPile.cards[i + 14]);
    }
  }

  // Shuffles deck following trick steps
  shuffle(index) {
    // Stores old rows state
    let oldOne = this.rowOne;
    let oldTwo = this.rowTwo;
    let oldThree = this.rowThree;

    // Resets rows
    this.rowOne = [];
    this.rowTwo = [];
    this.rowThree = [];

    // Handles shuffle for each row user clicked
    switch (index) {
      // If row one clicked
      // Puts the first row between the second and the third one
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

      // If row two clicked
      // Puts the second row between the first and the third one
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

      // If row three clicked
      // Puts the third row between the second and the first one
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
