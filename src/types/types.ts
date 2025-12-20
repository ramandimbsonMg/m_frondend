import { FormsType } from "./formsProps";

export interface PropsLogin {
    form: FormsType
}

export interface User {
  id: number;
  email: string;
  name?: string;
  firstname?: string;
  fonction?: string;
  phone?: string;
  avatar?: string;
  photo?: string;
  profile?: {
    name?: string;
    firstname?: string;
    bio?: string;
    slug?: string;
    photo?: string;
    couverture?: string;
  };
}