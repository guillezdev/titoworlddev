/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './LoginPage.css';

import { MdEmail } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import SocialButtons from '../../components/SocialButtons/SocialButtons';
import HeaderTexts from '../../components/HeaderTexts/HeaderTexts';

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <main className="main main--login">
      <HeaderTexts />

      <form className="form">
        <div className="input-group">
          <input required="required" type="text" id="form__email" />
          <label htmlFor="form__email">Email</label>
          <div className="input__icon">
            <MdEmail />
          </div>
        </div>

        <div className="input-group">
          <input
            required="required"
            type={showPassword ? 'text' : 'password'}
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
