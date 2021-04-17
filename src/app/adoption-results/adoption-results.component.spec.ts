import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionResultsComponent } from './adoption-results.component';

describe('AdoptionResultsComponent', () => {
  let component: AdoptionResultsComponent;
  let fixture: ComponentFixture<AdoptionResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
