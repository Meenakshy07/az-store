import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorecomponentComponent } from './storecomponent.component';

describe('StorecomponentComponent', () => {
  let component: StorecomponentComponent;
  let fixture: ComponentFixture<StorecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
