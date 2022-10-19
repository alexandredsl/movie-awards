export interface MovieData {
  content: MovieDataContent[];
  pageable: MovieDataPageable,
  totalElements: number,
  last: boolean,
  totalPages: number,
  first: boolean,
  sort: SortProps,
  number: number,
  numberOfElements: number,
  size: number;
}

interface SortProps {
  sorted: boolean,
  unsorted: boolean;
}

interface MovieDataContent {
  id: number,
  year: number,
  title: string,
  studios: string[],
  producers: string[],
  winner: boolean;
}

interface MovieDataPageable {
  sort: SortProps,
  pageSize: number,
  pageNumber: number,
  offset: number,
  paged: boolean,
  unpaged: boolean;
}


