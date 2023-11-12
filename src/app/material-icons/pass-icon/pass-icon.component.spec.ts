import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassIconComponent } from './pass-icon.component';

describe('PassIconComponent', () => {
  let component: PassIconComponent;
  let fixture: ComponentFixture<PassIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
