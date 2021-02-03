import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShysterComponent } from './shyster.component';

describe('ShysterComponent', () => {
  let component: ShysterComponent;
  let fixture: ComponentFixture<ShysterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShysterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShysterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
