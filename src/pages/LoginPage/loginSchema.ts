import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Zaz]).*$/,
      "Sua senha deve ter pelo menos 8 caracteres, uma letra, um número e um símbolo"
    ),
});
