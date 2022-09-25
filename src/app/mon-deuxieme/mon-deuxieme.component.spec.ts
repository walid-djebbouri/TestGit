import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDeuxiemeComponent } from './mon-deuxieme.component';

describe('MonDeuxiemeComponent', () => {
  let component: MonDeuxiemeComponent;
  let fixture: ComponentFixture<MonDeuxiemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonDeuxiemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonDeuxiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
