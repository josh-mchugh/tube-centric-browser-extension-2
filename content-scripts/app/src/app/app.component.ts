import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  count = 0;

  public constructor() {
    this.intervalCounter();
  }

  private intervalCounter() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
