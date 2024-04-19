import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDetailsCardComponent } from './brewery-details-card.component';

describe('BreweryDetailsCardComponent', () => {
  let component: BreweryDetailsCardComponent;
  let fixture: ComponentFixture<BreweryDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
