import { Component } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { differenceInCalendarDays } from 'date-fns';
import { MoviesService } from '../../services/movies.service';
import { MovieWinnerByYear } from '../../interfaces/movie-winner-by-year.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  private today = new Date();

  public $yearsWithMostWinners = this.movieService.getYearWithMultipleWinners();
  public $awardsInterval = this.movieService.getMaxMinWinIntervalForProducers();
  public $topThreeStudios = this.movieService.getStudiosWithWinCount().pipe(mergeMap(this.getFirstThreeItems));

  public $movieWinnerByYear: Observable<MovieWinnerByYear[]> = this.movieService.getMovieWinnerByYear(0);

  public selectedYear!: Date;

  constructor(public movieService: MoviesService) { }

  disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;

  getFirstThreeItems(studios: any) {
    studios.studios = studios.studios.slice(0, 3);
    return of(studios);
  }
}
