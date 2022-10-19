import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AwardIntervalForProducers } from '../interfaces/award-interval.interface';
import { MovieData } from '../interfaces/movie-data.interface';
import { MovieWinnerByYear } from '../interfaces/movie-winner-by-year.interface';
import { StudiosWithWinCount } from '../interfaces/studios-with-win-count.interface';
import { YearsWithMultipleWinners } from '../interfaces/years-with-multiple-winners.interface';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MoviesService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request with correct path and params when getMovieData is called.', () => {
    service.updateMovieDataParams({ year: 2018, winner: true });
    service.removeMovieDataParams(['winner']);
    service.getMovieData().subscribe((res) => {
      expect(res).toEqual({} as MovieData);
    });

    const req = httpTestCtrl.expectOne(`${service['baseUrl']}?page=0&size=15&year=2018`);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush({});
  });

  it('should send a GET request with correct path and params when getYearWithMultipleWinners is called.', () => {
    service.getYearWithMultipleWinners().subscribe((res) => {
      expect(res).toEqual({} as YearsWithMultipleWinners);
    });

    const req = httpTestCtrl.expectOne(`${service['baseUrl']}?projection=years-with-multiple-winners`);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush({});
  });

  it('should send a GET request with correct path and params when getStudiosWithWinCount is called.', () => {
    service.getStudiosWithWinCount().subscribe((res) => {
      expect(res).toEqual({} as StudiosWithWinCount);
    });

    const req = httpTestCtrl.expectOne(`${service['baseUrl']}?projection=studios-with-win-count`);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush({});
  });

  it('should send a GET request with correct path and params when getMaxMinWinIntervalForProducers is called.', () => {
    service.getMaxMinWinIntervalForProducers().subscribe((res) => {
      expect(res).toEqual({} as AwardIntervalForProducers);
    });

    const req = httpTestCtrl.expectOne(`${service['baseUrl']}?projection=max-min-win-interval-for-producers`);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush({});
  });

  it('should send a GET request with correct path and params when getMovieWinnerByYear is called.', () => {
    service.getMovieWinnerByYear(2018).subscribe((res) => {
      expect(res).toEqual([{} as MovieWinnerByYear]);
    });

    const req = httpTestCtrl.expectOne(`${service['baseUrl']}?year=2018&winner=true`);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush([{}]);
  });
});
