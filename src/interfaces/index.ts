export interface iChildren {
  children: React.ReactNode;
}

export interface iRegisterFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iUserContext {
  userRegister(data: iRegisterFormData): void;
  userLogin(data: iLoginFormData): void;
  setLoading(boolean: boolean): void;
  getProducts(token: string): void;
  loading: boolean;
  tokenUser: string;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type iUser = Omit<iLoginFormData, "accessToken">;

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
