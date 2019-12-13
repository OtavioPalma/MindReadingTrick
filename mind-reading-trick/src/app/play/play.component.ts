import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Router } from "@angular/router";

import { ApiService } from "src/services/api.service";
import { PileService } from "src/services/pile.service";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.sass"],
  animations: [
    trigger("animate", [ 
      state("initial", style({
         opacity: 0 
      })),
      transition("initial=>final", animate("750ms ease-in-out"))
    ])
  ]
})
export class PlayComponent implements OnInit {
  currentState: string = "initial";
  step: number = 0;
  title: string = "Choose a card, memorize it and proceed!";

  constructor(
    private apiService: ApiService,
    private pileService: PileService,
    private router: Router
  ) {}

  ngOnInit() {
    if ((this.currentState = "initial")) {
      setTimeout(() => {
        this.currentState = "final";
      }, 750);
    }

    // Creates a new Deck
    this.apiService.getNewDeck().subscribe(res => {
      // Gets card codes to create a custom pile of those cards
      let pileCode = res.cards.map(card => card.code);
      this.apiService.createPile(res.deck_id, pileCode).subscribe(res => {
        // Gets the new custom pile
        this.apiService.getPile(res.deck_id).subscribe(res => {
          this.pileService.setPile(res);
        });
      });
    });
  }

  shuffleDeck() {
    this.currentState = "initial";

    // Shuffle the pile
    this.apiService.shufflePile(this.pileService.pileId).subscribe(res => {
      // Update the user view to the shuffled pile
      this.apiService.getPile(this.pileService.pileId).subscribe(res => {
        this.pileService.setPile(res);
        this.step++;
        this.title = "Now tell me in which row is your card:";
      });
    });

    if ((this.currentState = "initial")) {
      setTimeout(() => {
        this.currentState = "final";
      }, 250);
    }
  }

  shuffleRow(index) {
    if (this.step != 0) {
      this.step++;
      this.currentState = "initial";

      this.pileService.shuffle(index);

      if (this.step == 2)
        this.title = "Ok, tell me again, which row is your card?";
      if (this.step == 3)
        this.title =
          "I swear that I'll not ask again, one more time, which row?";
      if (this.step == 4) {
        this.pileService.pickedCard = this.pileService.rowTwo[3];
        this.router.navigateByUrl("/end");
      }

      if ((this.currentState = "initial")) {
        setTimeout(() => {
          this.currentState = "final";
        }, 250);
      }
    }
  }
}
