import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremierComponent } from './mon-premier.component';

describe('MonPremierComponent for testing', () => {
  let component: MonPremierComponent;
  let fixture: ComponentFixture<MonPremierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPremierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the new component ', () => {
    expect(component).toBeTruthy();
  });
});
