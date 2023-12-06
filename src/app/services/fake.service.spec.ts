import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any;

  beforeEach(() => {
    // constructor approach
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn(),
    };

    service = new FakeService(httpClientSpy);
    // TestBed approach
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(FakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test data v1', () => {
    const res = 'techopsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV1();

    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test data v2', (done) => {
    const res = 'techopsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV2().subscribe({
      next: (data) => {
        expect(data).toEqual(res);
        done(); //for async ops
      },
      error: (error) => console.log(error),
    });

    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  xit('should test data v2 throw error', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'not found',
    });
    const res = 'techopsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    jest
      .spyOn(httpClientSpy, 'get')
      .mockReturnValue(throwError(() => errorResponse));
    service.getDataV2().subscribe({
      next: (data) => {
        expect(data).toEqual(res);
        // done(); //for async ops
      },
      error: (error) => {
        expect(error.message).toBe('test 404 error');
        console.log(error);
        done();
      },
    });

    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  // Post Call
  it('should test postDataV1', () => {
    const command = 'testing';
    const res = 'Techopsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postDataV1(command);
    expect(httpClientSpy.post).toBeCalledTimes(1);
  });
});
