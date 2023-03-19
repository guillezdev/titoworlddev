import React from 'react';
import './SocialButtons.css';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <button className="button button--google">
        <FcGoogle className="icon" /> INICIAR SESION CON GOOGLE
      </button>

      <button className="button button--facebook">
        <FaFacebookF className="icon" /> INICIAR SESION CON FACEBOOK
      </button>
    </div>
  );
}
