import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseOneComponent } from './showcase-one.component';

describe('ShowcaseOneComponent', () => {
  let component: ShowcaseOneComponent;
  let fixture: ComponentFixture<ShowcaseOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
