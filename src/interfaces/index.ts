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
  goLogout(): void;
  setInputValue(data: string): void;
  inputValue: string;
  loading: boolean;
  tokenUser: string;
  listProduct: iProduct[];
  setListProduct(data: iProduct[]): void;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type iUser = Omit<iLoginFormData, "accessToken">;

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCartContext {
  setIsModal(boolean: boolean): void;
  isModal: boolean;
  setCurrentSale(data: iProduct[]): void;
  addCart(data: iProduct): void;
  deleteCart(data: iProduct): void;
  currentSale: iProduct[];
  Total: number;
}
