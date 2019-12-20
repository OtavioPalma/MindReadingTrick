import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-howto",
  templateUrl: "./howto.component.html",
  styleUrls: ["./howto.component.sass"],
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
export class HowtoComponent implements OnInit {
  currentState: string = "initial";

  constructor() {}

  ngOnInit() {
    if ((this.currentState = "initial")) {
      setTimeout(() => {
        this.currentState = "final";
      }, 250);
    }
  }
}
