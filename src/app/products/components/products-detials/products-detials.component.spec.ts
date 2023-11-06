import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetialsComponent } from './products-detials.component';

describe('ProductsDetialsComponent', () => {
  let component: ProductsDetialsComponent;
  let fixture: ComponentFixture<ProductsDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetialsComponent]
    });
    fixture = TestBed.createComponent(ProductsDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
