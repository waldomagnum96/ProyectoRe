import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RezeropersoPage } from './rezeroperso.page';

describe('RezeropersoPage', () => {
  let component: RezeropersoPage;
  let fixture: ComponentFixture<RezeropersoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeropersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
