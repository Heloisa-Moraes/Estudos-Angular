import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBlindingComponent } from './two-way-blinding.component';

describe('TwoWayBlindingComponent', () => {
  let component: TwoWayBlindingComponent;
  let fixture: ComponentFixture<TwoWayBlindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBlindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
