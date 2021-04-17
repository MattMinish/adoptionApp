import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFilterNavComponent } from './adopt-filter-nav.component';

describe('AdoptFilterNavComponent', () => {
  let component: AdoptFilterNavComponent;
  let fixture: ComponentFixture<AdoptFilterNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptFilterNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptFilterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
