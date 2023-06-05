import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRevisionComponent } from './rxjs-revision.component';

describe('RxjsRevisionComponent', () => {
  let component: RxjsRevisionComponent;
  let fixture: ComponentFixture<RxjsRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
