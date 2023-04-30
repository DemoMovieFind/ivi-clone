export type Genre = {
  id:number,
  name:string,
  createdAt?:string
}

export type FilmMainCard = {
  id?:number|undefined,
  name: string;
  name_en?: string;
  type?: string;
  year: string;
  country: string[];
  genres: Genre[];
  description?: string;
  actors?: string[];
  mainImg?: string;
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};
