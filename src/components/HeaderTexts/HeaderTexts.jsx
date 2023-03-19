import React from 'react';
import './HeaderTexts.css';

import { Link } from 'react-router-dom';

export default function HeaderTexts({ isRegistry = false }) {
  return (
    <section className="texts">
      <p className="texts__slogan">EMPIEZA GRATIS</p>
      <h1 className="texts__title">
        {isRegistry ? 'Crea una nueva cuenta' : 'Entrar'}
        {isRegistry && <span className="texts__span">.</span>}
      </h1>
      <p className="texts__subtitle">
        {isRegistry ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
        {isRegistry ? (
          <Link to="/">Entrar</Link>
        ) : (
          <Link to="registry/client">Registrarse</Link>
        )}
      </p>
    </section>
  );
}
