import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import "zone.js";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngBootstrap() {
    const custom = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define("app-counter", custom);
  }
}
