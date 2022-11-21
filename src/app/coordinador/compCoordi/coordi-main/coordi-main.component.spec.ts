import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordiMainComponent } from './coordi-main.component';

describe('CoordiMainComponent', () => {
  let component: CoordiMainComponent;
  let fixture: ComponentFixture<CoordiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordiMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
