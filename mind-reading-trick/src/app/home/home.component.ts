import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  animations: [
    trigger("animate", [
      state(
        "initial",
        style({
          opacity: 0
        })
      ),
      transition("initial=>final", animate("250ms ease-in-out"))
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentState: string = "initial";

  constructor() {}

  ngOnInit() {
    // Change state to run animation
    if ((this.currentState = "initial")) {
      setTimeout(() => {
        this.currentState = "final";
      }, 250);
    }
  }
}
