import 'zone.js';

import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TagCounterComponent } from './components/tag-counter/app.tag-counter';
import { AppTagCounterService } from './components/tag-counter/services/app-tag-counter.service';
import { TagSearchComponent } from './components/tag-search/tag-search.component';

@NgModule({
  declarations: [
    TagCounterComponent,
    TagSearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [AppTagCounterService],
  bootstrap: [
    TagCounterComponent,
    TagSearchComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngBootstrap() {

    const tagCounter = createCustomElement(TagCounterComponent, {injector: this.injector});
    customElements.define('app-tag-counter', tagCounter);

    const tagSearch = createCustomElement(TagSearchComponent, {injector: this.injector});
    customElements.define('app-tag-search', tagSearch);
  }
}
