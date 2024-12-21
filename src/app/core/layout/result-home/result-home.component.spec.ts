import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHomeComponent } from './result-home.component';

describe('ResultHomeComponent', () => {
  let component: ResultHomeComponent;
  let fixture: ComponentFixture<ResultHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
