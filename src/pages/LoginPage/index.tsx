import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "./loginSchema";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { iLoginFormData } from "../../interfaces";

export const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iLoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <section>
      <form onSubmit={handleSubmit(userLogin)} noValidate>
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
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};
