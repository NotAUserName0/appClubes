import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGenComponent } from './user-gen.component';

describe('UserGenComponent', () => {
  let component: UserGenComponent;
  let fixture: ComponentFixture<UserGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
