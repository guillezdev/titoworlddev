/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <main className="main main--login">
      <section className="texts">
        <p className="texts__slogan">START FOR FREE</p>
        <h1 className="texts__title">Login</h1>
        <p className="texts__subtitle">
          You don't have an account?
          <a href="#" className="texts__link">
            Sign Up
          </a>
        </p>
      </section>

      <form className="form">
        <input
          className="form__input"
          type="email"
          id="form__email"
          placeholder="Email"
        />
        <input
          className="form__input"
          type="password"
          id="form__password"
          placeholder="Password"
        />

        <button className="button form__submit">Login</button>

        <a href="#" className="form__link">
          ¿Has olvidado la contraseña?
        </a>
      </form>

      <div className="social-buttons">
        <button className="button button--google">
          <FcGoogle className="icon" /> INICIAR SESION CON GOOGLE
        </button>
        <button className="button button--facebook">
          <FaFacebookF className="icon" /> INICIAR SESION CON FACEBOOK
        </button>
      </div>
    </main>
  );
}
