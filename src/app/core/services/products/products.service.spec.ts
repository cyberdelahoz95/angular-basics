import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      //Arrange
      const expectData = [
        {
          id: '1',
          title: 'My Title',
          price: 19999,
          description: 'This is my description',
          image: 'https://example.com/image.jpg',
        },
        {
          id: '2',
          title: 'Another Title',
          price: 29999,
          description: 'This is second description',
          image: 'https://example.com/image2.jpg',
        },
      ];
      let dataError, dataResponse;
      //Act
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(environment.url_api);
      req.flush(expectData);
      //Assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
