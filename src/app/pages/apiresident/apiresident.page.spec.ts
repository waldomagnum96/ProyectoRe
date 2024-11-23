import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiresidentPage } from './apiresident.page';

describe('ApiresidentPage', () => {
  let component: ApiresidentPage;
  let fixture: ComponentFixture<ApiresidentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiresidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
