import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit = { handleSubmit(onSubmit) } >
        <input name="primeiro_nome"
          ref = {
            register({
              required: "O campo precisa ter no máximo 20 caracteres.",
              maxLength: 20
            })
          }
        />
        <ErrorMessage errors = { errors } name="primeiro_nome" />

        <input name="ultimo_nome"
          ref = {
            register({
              required: "O campo precisa ter no máximo 20 caracteres.",
              maxLength: 20
            })
        }
        />
        <ErrorMessage errors = { errors } name="ultimo_nome" />

        <input name="idade" type="number"
          ref = { register({
            min: 18, max: 99,
            required: "A idade deve ser entre 18 e 99 ",
          })}
        />
        <ErrorMessage errors = { errors } name="idade" />

        <input type="submit" />
      </form>
    </div>
  )
 }