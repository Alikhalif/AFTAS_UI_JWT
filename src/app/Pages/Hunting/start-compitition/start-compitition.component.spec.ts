import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCompititionComponent } from './start-compitition.component';

describe('StartCompititionComponent', () => {
  let component: StartCompititionComponent;
  let fixture: ComponentFixture<StartCompititionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartCompititionComponent]
    });
    fixture = TestBed.createComponent(StartCompititionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
