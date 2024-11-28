import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RezeroarmasPage } from './rezeroarmas.page';

describe('RezeroarmasPage', () => {
  let component: RezeroarmasPage;
  let fixture: ComponentFixture<RezeroarmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeroarmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
