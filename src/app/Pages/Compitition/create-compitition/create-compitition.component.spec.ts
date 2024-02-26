import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompititionComponent } from './create-compitition.component';

describe('CreateCompititionComponent', () => {
  let component: CreateCompititionComponent;
  let fixture: ComponentFixture<CreateCompititionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompititionComponent]
    });
    fixture = TestBed.createComponent(CreateCompititionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
