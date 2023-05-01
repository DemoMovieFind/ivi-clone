export type Genre = {
  id: number;
  name: string;
  createdAt?: string;
};

export type Countries = {
  name: string;
  id?: number;
  fk_countryid?: string | null;
  createdAt: string;
  updatedAt: string;
  FilmCountries: { id: number; filmId: number; countryId: number };
};

export type Actors = {
  name: string;
  id?: number;
  createdAt: string;
  updatedAt: string;
  FilmActors: { id: number; filmId: number; staffId: number };
};

export type FilmWatchCardType = {
  name: string;
  name_en?: string;
  type?: string;
  year: string;
  countries: Countries[];
  genres: Genre[];
  description?: string;
  time?: string;
  age?: string;
  actors?: Actors[];
  mainImg?: string;
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};
