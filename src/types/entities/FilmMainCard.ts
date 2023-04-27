export type FilmMainCard = {
  name: string;
  name_en?: string;
  type?: string;
  year: string;
  country: string[];
  genre: string[];
  description?: string;
  actors?: string[];
  mainImg?: string;
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};
