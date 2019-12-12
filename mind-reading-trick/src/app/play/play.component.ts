import { Component, OnInit } from "@angular/core";

import { ApiService } from "src/services/api.service";
import { Card } from "../model/Card";
import { PileService } from "src/services/pile.service";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.sass"]
})
export class PlayComponent implements OnInit {
  private pileCode;
  private title = "Choose a card, memorize it and proceed!";
  private step = 0;

  constructor(
    private apiService: ApiService,
    private pileService: PileService
  ) {}

  ngOnInit() {
    this.apiService.getNewDeck().subscribe(res => {
      this.pileCode = res.cards.map(card => card.code);
      this.apiService.createPile(res.deck_id, this.pileCode).subscribe(res => {
        this.apiService.getPile(res.deck_id).subscribe(res => {
          this.pileService.setPile(res);
        });
      });
    });
  }

  shuffle() {
    this.apiService.shufflePile(this.pileService.pileId).subscribe(res => {
      this.apiService.getPile(this.pileService.pileId).subscribe(res => {
        this.pileService.setPile(res);
        this.step++;
        this.title = "Now tell me in which row is your card:";
      });
    });
  }

  choose(e) {
    if (this.step > 0) {
      if (e.path[2].className.includes(0)) {
        this.pileService.shuffle(0);
      } else if (e.path[2].className.includes(1)) {
        this.pileService.shuffle(1);
      } else if (e.path[2].className.includes(2)) {
        this.pileService.shuffle(2);
      }
    }
  }
}
