import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  private today = new Date();

  public loading = false;
  public selectedYear!: Date;
  public isWinner: boolean;
  public movieDataList: any = {
    pageable: {
      pageNumber: 0
    }
  };

  constructor(public movieService: MoviesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;

  loadData() {
    this.loading = true;
    this.movieService.getMovieData().subscribe(res => {
      this.movieDataList = res;
      this.loading = false;
    });
  }

}


