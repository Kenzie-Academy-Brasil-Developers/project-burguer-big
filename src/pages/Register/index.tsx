import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { iRegisterFormData } from "../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledSection } from "../../styles/pageForm";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { GreyButton } from "../../styles/buttons";

export const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
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
          {errors.name?.message && <p>{errors.name.message}</p>}
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </fieldset>
        {errors.email?.message && <p>{errors.email.message}</p>}
        <fieldset>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
        </fieldset>
        {errors.password?.message && <p>{errors.password.message}</p>}
        <fieldset>
          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("passwordConfirmation")}
          />
        </fieldset>
        {errors.passwordConfirmation?.message && (
          <p>{errors.passwordConfirmation.message}</p>
        )}

        <GreyButton type="submit">Cadastrar</GreyButton>
      </form>
    </StyledSection>
  );
};
