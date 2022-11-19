import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaGenComponent } from './entrada-gen.component';

describe('EntradaGenComponent', () => {
  let component: EntradaGenComponent;
  let fixture: ComponentFixture<EntradaGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
