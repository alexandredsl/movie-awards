
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardIntervalForProducers } from '../interfaces/award-interval.interface';
import { MovieDataParams } from '../interfaces/movie-data-params.interface';
import { MovieData } from '../interfaces/movie-data.interface';
import { MovieWinnerByYear } from '../interfaces/movie-winner-by-year.interface';
import { StudiosWithWinCount } from '../interfaces/studios-with-win-count.interface';
import { YearsWithMultipleWinners } from '../interfaces/years-with-multiple-winners.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  private movieDataParams: MovieDataParams = {};

  private baseUrl = 'https://tools.texoit.com/backend-java/api/movies';

  constructor(private httpClient: HttpClient) { }

  public getMovieData(): Observable<MovieData> {
    const queryParams: any = Object.assign({ page: 0, size: 15 }, this.movieDataParams);
    return this.httpClient.get<MovieData>(this.baseUrl, { params: queryParams });
  }

  public getYearWithMultipleWinners(): Observable<YearsWithMultipleWinners> {
    return this.httpClient.get<YearsWithMultipleWinners>(this.baseUrl, {
      params: {
        projection: 'years-with-multiple-winners'
      }
    });
  }

  public getStudiosWithWinCount(): Observable<StudiosWithWinCount> {
    return this.httpClient.get<StudiosWithWinCount>(this.baseUrl, {
      params: {
        projection: 'studios-with-win-count'
      }
    });
  }

  public getMaxMinWinIntervalForProducers(): Observable<AwardIntervalForProducers> {
    return this.httpClient.get<AwardIntervalForProducers>(this.baseUrl, {
      params: {
        projection: 'max-min-win-interval-for-producers'
      }
    });
  }

  public getMovieWinnerByYear(year: number): Observable<MovieWinnerByYear[]> {
    return this.httpClient.get<MovieWinnerByYear[]>(this.baseUrl, {
      params: {
        year,
        winner: true
      }
    });
  }

  public updateMovieDataParams(filters: MovieDataParams) {
    Object.assign(this.movieDataParams, filters);
  }

  public removeMovieDataParams(filters: Array<keyof MovieDataParams>) {
    filters.forEach(filter => {
      delete this.movieDataParams[filter];
    });
  }
}




