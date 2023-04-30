export type Genre = {
  id: number;
  name: string;
  createdAt?: string;
};

type Countries = {
  name: string;
  id?: number;
  fk_countryid?: string | null;
  createdAt: string;
  updatedAt: string;
  FilmCountries: { id: number; filmId: number; countryId: number };
};

type Actors = {
  name: string;
  id?: number;
  createdAt: string;
  updatedAt: string;
  FilmActors: { id: number; filmId: number; staffId: number };
};

export type FilmMainCard = {
  id?: number | undefined;
  name: string;
  name_en?: string;
  type?: string;
  year: number;
  countries: Countries[];
  genres: Genre[];
  description?: string;
  actors?: Actors[];
  mainImg?: string;
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};
