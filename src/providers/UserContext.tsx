import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  iChildren,
  iLoginFormData,
  iProduct,
  iRegisterFormData,
  iUserContext,
} from "../interfaces";

import { api } from "../services/api";

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [loading, setLoading] = useState(false);
  const [listProduct, setListProduct] = useState<iProduct[]>([] as iProduct[]);
  const [inputValue, setInputValue] = useState("");

  const [tokenUser, setTokenUser] = useState<string>(
    (localStorage.getItem("@TOKEN") as string) || ""
  );

  const navigate = useNavigate();

  //Register

  const userRegister = async (dados: iRegisterFormData) => {
    try {
      const response = await api.post("users", dados);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("deu certo");
    }
  };

  //Login

  async function userLogin(dados: iLoginFormData) {
    try {
      setLoading(true);
      const response = await api.post("login", dados);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      setTokenUser(response.data.accessToken);
      getProducts(response.data.accessToken);
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      console.log("deu certo");
      setLoading(false);
    }
  }

  //Dashboard

  const goLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  async function getProducts(token: string = tokenUser) {
    try {
      const response = await api.get<iProduct[]>("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setListProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userLogin,
        userRegister,
        getProducts,
        goLogout,
        listProduct,
        setListProduct,
        tokenUser,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
