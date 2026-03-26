import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starfield } from './starfield';

describe('Starfield', () => {
  let component: Starfield;
  let fixture: ComponentFixture<Starfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starfield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Starfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
