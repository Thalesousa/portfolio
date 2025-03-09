"use client";

import { UseFormInputsSubmit } from "@/hooks/UseFormInputsSubmit";

export default function Form() {
  const { handleOnChange, handleOnSubmit, inputs, status } = UseFormInputsSubmit();

  return (
    <>
      <h1>Fale Comigo</h1>

      <form onSubmit={handleOnSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="Nome completo"
        />
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="E-mail"
        />
        <textarea
          minLength={20}
          maxLength={500}
          placeholder="Mensagem"
          cols={30}
          rows={10}
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>Enviar</button>
      </form>
    </>
  );
}
