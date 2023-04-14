import { Actor } from "./Actor";
import { Image } from "./Image";

export type Film = {
  id?: number;
  title?: string;
  original_title?: string;
  description?: string;
  year?: number;
  actors?: Actor[];
  posters?: {
    small?: Image | null;
    medium?: Image | null;
    large?: Image | null;
  };
  rating?: {
    ivi?: number | null;
    kp?: number | null;
  };
};
