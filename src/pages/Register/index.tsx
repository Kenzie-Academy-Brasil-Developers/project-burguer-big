import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { api } from "../../services/api";
import { iRegisterFormData } from "../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iRegisterFormData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <section>
      <form onSubmit={handleSubmit(userRegister)} noValidate>
        <label>Name</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <label>Confirmar senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirmation")}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};
