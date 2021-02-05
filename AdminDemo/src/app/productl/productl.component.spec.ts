import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlComponent } from './productl.component';

describe('ProductlComponent', () => {
  let component: ProductlComponent;
  let fixture: ComponentFixture<ProductlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
