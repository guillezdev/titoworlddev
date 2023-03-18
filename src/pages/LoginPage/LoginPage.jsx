/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './LoginPage.css';
import SocialButtons from '../../components/SocialButtons/SocialButtons';

export default function LoginPage() {
  return (
    <main className="main main--login">
      <section className="texts">
        <p className="texts__slogan">EMPIEZA GRATIS</p>
        <h1 className="texts__title">Entrar</h1>
        <p className="texts__subtitle">
          ¿No tienes una cuenta?
          <a href="#">Registrarse</a>
        </p>
      </section>

      <form className="form">
        <input
          className="input"
          type="email"
          id="form__email"
          placeholder="Email"
        />
        <input
          className="input"
          type="password"
          id="form__password"
          placeholder="Contraseña"
        />

        <button className="button">Entrar</button>

        <a href="#">¿Has olvidado la contraseña?</a>
      </form>

      <SocialButtons />
    </main>
  );
}
