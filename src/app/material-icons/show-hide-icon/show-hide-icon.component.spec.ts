import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideIconComponent } from './show-hide-icon.component';

describe('ShowHideIconComponent', () => {
  let component: ShowHideIconComponent;
  let fixture: ComponentFixture<ShowHideIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHideIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowHideIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
