export type FilmWatchCardType = {
  name: string;
  name_en?: string;
  type?: string;
  year: string;
  country: string[];
  genre: string[];
  description?: string;
  time?: string;
  age?: string;
  actors?: string[];
  mainImg?: string;
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};