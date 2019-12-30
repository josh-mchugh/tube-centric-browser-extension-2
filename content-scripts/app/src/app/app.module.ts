import 'zone.js';

import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { TagCounterComponent } from './components/tagCounter/app.tag-counter';
import { AppTagCounterService } from './components/tagCounter/services/app-tag-counter.service';

@NgModule({
  declarations: [
    TagCounterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AppTagCounterService],
  bootstrap: [TagCounterComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngBootstrap() {
    const custom = createCustomElement(TagCounterComponent, {injector: this.injector});
    customElements.define('app-counter', custom);
  }
}
