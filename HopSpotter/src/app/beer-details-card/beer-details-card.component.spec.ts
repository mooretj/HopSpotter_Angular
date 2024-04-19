import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsCardComponent } from './beer-details-card.component';

describe('BeerDetailsCardComponent', () => {
  let component: BeerDetailsCardComponent;
  let fixture: ComponentFixture<BeerDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
