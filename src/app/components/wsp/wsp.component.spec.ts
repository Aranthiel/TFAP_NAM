import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WspComponent } from './wsp.component';

describe('WspComponent', () => {
  let component: WspComponent;
  let fixture: ComponentFixture<WspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
