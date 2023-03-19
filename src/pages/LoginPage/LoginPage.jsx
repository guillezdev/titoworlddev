/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './LoginPage.css';

import { MdEmail } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import SocialButtons from '../../components/SocialButtons/SocialButtons';
import HeaderTexts from '../../components/HeaderTexts/HeaderTexts';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/usersAPI';

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    isLoading,
    data: users,
    isError,
    error
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  const handleInitUserSesion = e => {
    e.preventDefault();
    const emailInput = document.querySelector('#form__email');
    const passwordInput = document.querySelector('#form__password');

    const user = users.find(
      user =>
        user.email === emailInput.value && user.password === passwordInput.value
    );

    if (!user) {
      return console.log(
        'La contraseña y/o el email son incorrectos, o el usuario no existe.'
      );
    } else if (user.isEstablishment) {
      return console.log(
        `El local ${user.name} ${user.lastName} ha iniciado sesión`
      );
    }
    return console.log(
      `El usuario ${user.name} ${user.lastName} ha iniciado sesión`
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <main className="main main--login">
      <HeaderTexts />

      <form className="form" onSubmit={handleInitUserSesion}>
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

        <button className="button">Entrar</button>

        <a href="">¿Has olvidado la contraseña?</a>
      </form>

      <SocialButtons />
    </main>
  );
}
