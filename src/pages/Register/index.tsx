import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { iRegisterFormData } from "../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledSection } from "../../styles/pageForm";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

export const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iRegisterFormData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledSection>
      <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <img src="" alt="" />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </span>
        </div>
      <form onSubmit={handleSubmit(userRegister)} noValidate>
       <div>
         <h4>Cadastro</h4>
         <button>
         <Link to="/">Retornar para o login</Link>
         </button>
       </div>
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
        </fieldset>
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
        <fieldset>
          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("passwordConfirmation")}
          />
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </StyledSection>
  );
};
