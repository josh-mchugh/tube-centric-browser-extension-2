export class DomObserver {

  private selector: string;
  private options: any;
  private observer: MutationObserver;

  constructor(selector: string, callback: any, options?: any) {

    if (!options) {
      options = {
        childList: true,
        subtree: true,
        characterData: true
      };
    }

    this.options = options;
    this.selector = selector;
    this.observer = new MutationObserver(callback);
  }

  public observe(): DomObserver {

    this.observer.observe(document.querySelector(this.selector), this.options);

    return this;
  }

  public disconnect(): void {

    this.observer.disconnect();
  }
}
