/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';

import HeaderTexts from '../../components/HeaderTexts/HeaderTexts';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import RegistryTabs from '../../components/RegistryTabs/RegistryTabs';

import { MdEmail, MdDescription } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { createUser, getUsers } from '../../api/usersAPI';

export default function ClientRegistryPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  const addUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log('User created successfully');
      console.log(users);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    addUserMutation.mutate({
      id: users.length + 1,
      isEstablishment: false,
      ...user
    });
  };

  return (
    <>
      <RegistryTabs />

      <main className="main main-registry-client">
        <HeaderTexts isRegistry={true} />

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="input-group">
              <input
                required="required"
                type="text"
                name="name"
                id="form__name"
              />
              <label htmlFor="form__name">Nombre</label>
              <div className="input__icon">
                <MdDescription />
              </div>
            </div>
            <div className="input-group">
              <input
                required="required"
                type="text"
                name="lastName"
                id="form__lastname"
              />
              <label htmlFor="form__lastname">Apellidos</label>
              <div className="input__icon">
                <MdDescription />
              </div>
            </div>
          </div>
          <div className="input-group">
            <input
              required="required"
              type="tel"
              name="phone"
              id="form__phone"
            />
            <label htmlFor="form__phone">Telefono</label>
            <div className="input__icon">
              <FaPhoneAlt />
            </div>
          </div>
          <div className="input-group">
            <input
              required="required"
              type="text"
              name="email"
              id="form__email"
            />
            <label htmlFor="form__email">Email</label>
            <div className="input__icon">
              <MdEmail />
            </div>
          </div>
          <div className="input-group">
            <input
              required="required"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="form__password"
            />
            <label htmlFor="form__password">Contraseña</label>
            <div
              className="input__icon input__icon--password"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          <button className="button">Crear cuenta</button>
          <p>
            Al registrarte, aceptas nuestros{' '}
            <a href="">Terminos y condiciones</a> y la{' '}
            <a href="">Politica de Privacidad</a>
          </p>
        </form>
        <SocialButtons />
      </main>
    </>
  );
}
