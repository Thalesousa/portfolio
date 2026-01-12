"use client";

import { UseFormInputsSubmit } from "@/hooks/UseFormInputsSubmit";

export default function Form() {
  const { handleOnChange, handleOnSubmit, inputs, status } =
    UseFormInputsSubmit();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="gradient-text text-4xl md:text-5xl font-semibold text-center py-8">
        Fale Comigo
      </h1>

      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              placeholder="Nome completo"
              className="input input-bordered w-full bg-base-200 focus:border-secondary focus:outline-none"
            />
          </div>
          <div className="form-control w-full">
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              placeholder="E-mail"
              className="input input-bordered w-full bg-base-200 focus:border-secondary focus:outline-none"
            />
          </div>
        </div>

        <div className="form-control w-full">
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
            className="textarea textarea-bordered w-full bg-base-200 focus:border-secondary focus:outline-none min-h-[200px]"
          />
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="btn btn-gradient w-full md:w-60 self-center disabled:opacity-50"
        >
          {status.submitting ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
}
