import { TestBed, async } from '@angular/core/testing';
import { TagCounterComponent } from './app.tag-counter';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TagCounterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TagCounterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'content-scripts'`, () => {
    const fixture = TestBed.createComponent(TagCounterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('content-scripts');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TagCounterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('content-scripts app is running!');
  });
});
