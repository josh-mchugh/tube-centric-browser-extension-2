import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTagCounterService {

  private title: string;
  private description: string;
  private tags: string[];
  private titleTags: string[];
  private descriptionTags: string[];

  constructor() { }

  public setTitle(title: string): void {
    this.title = title;
    this.titleTags = this.getTagsInTitle();
  }

  public setDescription(description: string): void {
    this.description = description;
    this.descriptionTags = this.getTagsInDescription();
  }

  public setTags(tags: string[]): void {
    this.tags = tags;
    this.titleTags = this.getTagsInTitle();
    this.descriptionTags = this.getTagsInDescription();
  }

  public getTagsCount(): number {
    return this.tags.length;
  }

  public getTitleTagsCount(): number {
    return this.titleTags.length;
  }

  public getDescriptionTagsCount(): number {
    return this.descriptionTags.length;
  }

  private getTagsInTitle(): string[] {
    if (!this.tags) {
      return [];
    }
    return this.tags.filter(tag => this.title.toLowerCase().includes(tag.toLowerCase()));
  }

  private getTagsInDescription(): string[] {
    if (!this.tags) {
      return [];
    }
    return this.tags.filter(tag => this.description.toLowerCase().includes(tag.toLowerCase()));
  }
}
