import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluginnativoPage } from './pluginnativo.page';

describe('PluginnativoPage', () => {
  let component: PluginnativoPage;
  let fixture: ComponentFixture<PluginnativoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginnativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
