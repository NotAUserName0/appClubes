import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaMainComponent } from './entrada-main.component';

describe('EntradaMainComponent', () => {
  let component: EntradaMainComponent;
  let fixture: ComponentFixture<EntradaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
