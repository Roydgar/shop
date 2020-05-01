import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of, defer } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductCategory, ProductModel } from '../..';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { Location } from '@angular/common';

describe('UserProfileComponent', () => {

  const productMock: ProductModel = {
    id: 2,
    name: 'Iphone 11',
    description: 'Phone for real woman',
    price: 1500,
    category: ProductCategory.PHONE,
    isAvailable: true
  };

  let fixture: ComponentFixture<ProductComponent>;
  let selectSelectedProductByUrlSpy: jasmine.Spy;
  let locationSpyObj: any;
  let productsFacadeSpyObj: any;

  beforeEach(() => {
    productsFacadeSpyObj = jasmine.createSpyObj('ProductsFacade', [
      'selectSelectedProductByUrl'
    ]);

    locationSpyObj = jasmine.createSpyObj('Location', [
      'back'
    ]);

    selectSelectedProductByUrlSpy = productsFacadeSpyObj.selectSelectedProductByUrl.and.returnValue(
      defer(() => of(productMock))
    );

    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
          { provide: ProductsFacade, useValue: productsFacadeSpyObj },
          { provide: Location, useValue: locationSpyObj }
        ]
    });

    fixture = TestBed.createComponent(ProductComponent);
  });

  it('should display fetched product', fakeAsync(() => {
    fixture.detectChanges();

    expect(productsFacadeSpyObj.selectSelectedProductByUrl).toHaveBeenCalled();
    tick();
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
    const subtitle = fixture.debugElement.query(By.css('mat-card-subtitle')).nativeElement;
    const deListItems = fixture.debugElement.queryAll(By.css('mat-list-item'));

    expect(title.textContent.trim()).toEqual(productMock.name);
    expect(subtitle.textContent.trim()).toEqual(`Description: ${productMock.description}`);
    expect(deListItems[0].nativeElement.textContent.trim()).toEqual('Price: ₴1,500.00');
    expect(deListItems[1].nativeElement.textContent.trim()).toEqual('Category: PHONE');
    expect(deListItems[2].nativeElement.textContent.trim()).toEqual(`Is available: ${productMock.isAvailable}`);
  }));

  it('should navigate back on Back button click', fakeAsync(() => {
    const goBackButton = fixture.debugElement.query(By.css('button')).nativeElement;

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(goBackButton.textContent.trim()).toEqual('Back');

    goBackButton.click();

    expect(locationSpyObj.back).toHaveBeenCalled();
  }));
});
