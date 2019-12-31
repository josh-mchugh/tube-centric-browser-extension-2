import { TestBed, async } from '@angular/core/testing';
import { TagCounterComponent } from './app.tag-counter';

describe('TagCounter', () => {
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
});
