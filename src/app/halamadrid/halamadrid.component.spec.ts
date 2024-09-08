import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamadridComponent } from './halamadrid.component';

describe('HalamadridComponent', () => {
  let component: HalamadridComponent;
  let fixture: ComponentFixture<HalamadridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalamadridComponent]
    });
    fixture = TestBed.createComponent(HalamadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
