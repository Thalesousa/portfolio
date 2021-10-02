import { useState, FormEvent } from 'react';
import { formspree } from '../services/formspree';

import { toast } from 'react-toastify';

export function UseFormInputsSubmit() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e:any) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      subject: 'Email do seu site (thalesousa.vercel.app)',
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    formspree.post(`${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`, inputs).then(() => {
      handleServerResponse(
        true,
        toast.success('Mensagem enviada!')
      );
    })
    .catch(error => {
      handleServerResponse(false, error.response.data.error);
      toast.error('Ocorreu um erro durante o envio.')
    });
  };

  return {
    handleOnChange,
    handleOnSubmit,
    status,
    inputs,
  }
}