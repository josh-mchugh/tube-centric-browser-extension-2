import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { DomObserver } from '../../utils/DomObserverFactory';
import { AppTagCounterService } from './services/app-tag-counter.service';

@Component({
  selector: 'app-tag-counter',
  templateUrl: './app.tag-counter.html',
  styleUrls: ['./app.tag-counter.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TagCounterComponent implements OnInit, OnDestroy {

  private titleSelector = '#left .title #textbox';
  private descriptionSelector = '#left .description #textbox';
  private tagsContainerSelector = '#left .tags #chip-bar .chip-and-bar';
  private tagsSelector = this.tagsContainerSelector + ' #chip-text';

  private titleObserver: DomObserver;
  private descriptionObserver: DomObserver;
  private tagsObserver: DomObserver;

  public constructor(public counterService: AppTagCounterService) {
    this.titleObserver = new DomObserver(this.titleSelector, this.handleTitleChange);
    this.descriptionObserver = new DomObserver(this.descriptionSelector, this.handleDescriptionChange);
    this.tagsObserver = new DomObserver(this.tagsContainerSelector, this.handleTagsChange);
  }

  ngOnInit() {
    this.initializeValues();
    this.titleObserver.observe();
    this.descriptionObserver.observe();
    this.tagsObserver.observe();
  }

  ngOnDestroy() {
    this.titleObserver.disconnect();
    this.descriptionObserver.disconnect();
    this.tagsObserver.disconnect();
  }

  private initializeValues() {
    this.counterService.setTitle(document.querySelector(this.titleSelector).textContent);
    this.counterService.setDescription(document.querySelector(this.descriptionSelector).textContent);
    this.counterService.setTags(this.getTagsFromTagsContainer());
  }

  private handleTitleChange = (mutations) => {
    mutations.forEach(mutation => this.counterService.setTitle(mutation.target.textContent));
  }

  private handleDescriptionChange = (mutations) => {
    mutations.forEach(mutation => this.counterService.setDescription(mutation.target.textContent));
  }

  private handleTagsChange = (mutations) => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length >= 1 || mutation.removedNodes.length >= 1) {
        this.counterService.setTags(this.getTagsFromTagsContainer());
      }
    });
  }

  private getTagsFromTagsContainer(): string[] {
    const tags = [];
    document.querySelectorAll(this.tagsSelector).forEach(node => {
      tags.push(node.textContent);
    });
    return tags;
  }
}
