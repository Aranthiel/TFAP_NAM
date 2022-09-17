import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetsComponent } from './social-nets.component';

describe('SocialNetsComponent', () => {
  let component: SocialNetsComponent;
  let fixture: ComponentFixture<SocialNetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
