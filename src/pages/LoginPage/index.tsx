import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "./loginSchema";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { iLoginFormData } from "../../interfaces";

import { StyledSection } from "../../styles/pageForm";

//import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iLoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledSection>
      <div>
        <div>
          {/* <img src={logo} alt="Logo" /> */}
        </div>
        <div>
          <img src="" alt="" />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit(userLogin)} noValidate>
        <h4>Login</h4>
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </fieldset>

        <fieldset>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
        </fieldset>

        <button type="submit">Logar</button>

        <button>
          <Link to="/register">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </Link>
        </button>
      </form>
    </StyledSection>
  );
};
