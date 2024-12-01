import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReremakePage } from './reremake.page';

describe('ReremakePage', () => {
  let component: ReremakePage;
  let fixture: ComponentFixture<ReremakePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReremakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
