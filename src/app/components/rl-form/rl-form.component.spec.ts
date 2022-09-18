import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlFormComponent } from './rl-form.component';

describe('RlFormComponent', () => {
  let component: RlFormComponent;
  let fixture: ComponentFixture<RlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
