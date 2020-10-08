import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularAppComponent } from './my-angular-app.component';

describe('MyAngularAppComponent', () => {
  let component: MyAngularAppComponent;
  let fixture: ComponentFixture<MyAngularAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAngularAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAngularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
