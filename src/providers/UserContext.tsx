import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iChildren, iLoginFormData, IProduct, iRegisterFormData, iUserContext } from "../interfaces";


import { api } from "../services/api";


export const UserContext = createContext <iUserContext> ({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [loading, setLoading] = useState(false);
  const [tokenUser, setTokenUser] = useState<string>("" as string);
 


  //Register

  const userRegister = async (dados : iRegisterFormData) => {
   try {
     const response = await api.post("users", dados);
     console.log(response);
    
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
      getProducts(response.data.accessToken)
      console.log(response.data);
    } catch (error) {
      console.error("deu erro");
    } finally {
      console.log("deu certo");
      setLoading(false);
    }
  }

  //Dashboard

  async function getProducts(token: string) {
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider value={{ loading, setLoading, userLogin, userRegister, getProducts, tokenUser}}>
      {children}
    </UserContext.Provider>
  );
};
