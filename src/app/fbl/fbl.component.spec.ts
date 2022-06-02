import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FblComponent } from './fbl.component';

describe('FblComponent', () => {
  let component: FblComponent;
  let fixture: ComponentFixture<FblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
