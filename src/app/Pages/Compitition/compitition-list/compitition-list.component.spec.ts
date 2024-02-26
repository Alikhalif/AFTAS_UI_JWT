import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompititionListComponent } from './compitition-list.component';

describe('CompititionListComponent', () => {
  let component: CompititionListComponent;
  let fixture: ComponentFixture<CompititionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompititionListComponent]
    });
    fixture = TestBed.createComponent(CompititionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
