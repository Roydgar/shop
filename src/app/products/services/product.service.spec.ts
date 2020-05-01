import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { Product, ProductCategory, ProductModel } from '..';
import { productsAPI } from '../products.config';

describe('ProductService', () => {
  let mockHttp: HttpTestingController;
  let productService: ProductService;

  const productsResponseMock: ProductModel[] = [
    {
      id: 1,
      name: 'Samsung Galaxy32',
      description: 'Phone for real man',
      price: 505,
      category: ProductCategory.PHONE,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Iphone 11',
      description: 'Phone for real woman',
      price: 1500,
      category: ProductCategory.PHONE,
      isAvailable: true
    }
  ];

  const productMock: ProductModel = {
    id: 2,
    name: 'Iphone 11',
    description: 'Phone for real woman',
    price: 1500,
    category: ProductCategory.PHONE,
    isAvailable: true
  };

  const baseUrl = 'http://localhost:3000/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: productsAPI,
          useValue: baseUrl
        }
      ]
    });

    mockHttp = TestBed.inject(HttpTestingController);
    productService = TestBed.inject(ProductService);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should get products', () => {
    productService.getProducts().subscribe((products: Product[]) => {
      expect(products).toEqual(productsResponseMock);
    });

    const mockRequest: TestRequest = mockHttp.expectOne(baseUrl);

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');
    expect(mockRequest.request.method).toEqual('GET');

    mockRequest.flush(productsResponseMock);
  });

  it('get products should handle an error', () => {
    productService.getProducts().subscribe(
      (products: Product[]) => {
        expect(products).toEqual(productsResponseMock);
      },
      error => {
        expect(error).toEqual('Something bad happened; please try again later.');
      }
    );

    const mockRequest: TestRequest = mockHttp.expectOne(baseUrl);

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');
    expect(mockRequest.request.method).toEqual('GET');

    mockRequest.flush('error', {
      status: 500,
      statusText: 'Server Error'
    });
  });

  it('should create product', () => {
    productService.createProduct({...productMock}).subscribe((product: Product) => {
      expect(product).toEqual(productMock);
    });

    const mockRequest: TestRequest = mockHttp.expectOne(baseUrl);

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');
    expect(mockRequest.request.method).toEqual('POST');

    mockRequest.flush(productMock);
  });

  it('should update product', () => {
    productService.updateProduct({...productMock}).subscribe((product: Product) => {
      expect(product).toEqual(productMock);
    });

    const mockRequest: TestRequest = mockHttp.expectOne(`${baseUrl}/${productMock.id}`);

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');
    expect(mockRequest.request.method).toEqual('PUT');

    mockRequest.flush(productMock);
  });
});
