import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFileLoadComponent } from './btn-file-load.component';

describe('BtnFileLoadComponent', () => {
  let component: BtnFileLoadComponent;
  let fixture: ComponentFixture<BtnFileLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFileLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFileLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
