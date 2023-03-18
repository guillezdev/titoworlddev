/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './LoginPage.css';

import { MdEmail } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import SocialButtons from '../../components/SocialButtons/SocialButtons';

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <main className="main main--login">
      <section className="texts">
        <p className="texts__slogan">EMPIEZA GRATIS</p>
        <h1 className="texts__title">Entrar</h1>
        <p className="texts__subtitle">
          ¿No tienes una cuenta?
          <a href="">Registrarse</a>
        </p>
      </section>

      <form className="form">
        <div className="input-group">
          <input required="required" type="text" id="form__email" />
          <label>Email</label>
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
          <label>Contraseña</label>
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
