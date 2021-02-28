import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtubersPageComponent } from './vtubers-page.component';

describe('VtubersPageComponent', () => {
  let component: VtubersPageComponent;
  let fixture: ComponentFixture<VtubersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtubersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtubersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
