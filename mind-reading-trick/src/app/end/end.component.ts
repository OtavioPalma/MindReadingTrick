import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, state, style, transition, animate } from "@angular/animations";

import { PileService } from "src/services/pile.service";
import { Card } from "../model/Card";

@Component({
  selector: "app-end",
  templateUrl: "./end.component.html",
  styleUrls: ["./end.component.sass"],
  animations: [
    trigger("animate", [ 
      state("initial", style({
         opacity: 0 
      })),
      transition("initial=>final", animate("300ms ease-in"))
    ])
  ]
})
export class EndComponent implements OnInit {
  currentState: string = "initial";
  pickedCard: Card = new Card();

  constructor(private pileService: PileService, private router: Router) {}

  ngOnInit() {
    if ((this.currentState = "initial")) {
      setTimeout(() => {
        this.currentState = "final";
      }, 300);
    }

    if (this.pileService.pileId == "") {
      this.router.navigateByUrl("/home");
    } else {
      this.pickedCard = this.pileService.pickedCard;
    }
  }
}
