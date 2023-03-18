/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import HeaderTexts from '../../components/HeaderTexts/HeaderTexts';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import RegistryTabs from '../../components/RegistryTabs/RegistryTabs';

import { MdEmail, MdDescription, MdLocationCity } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { TbBuildingEstate } from 'react-icons/tb';
import { GrMapLocation } from 'react-icons/gr';

export default function EstablishmentRegistryPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <RegistryTabs isClient={false} />

      <main className="main main-registry-establishment">
        <HeaderTexts isRegistry={true} />

        <form className="form">
          <div className="form__input-group">
            <div className="input-group">
              <input required="required" type="text" id="form__name" />
              <label htmlFor="form__name">Nombre</label>
              <div className="input__icon">
                <MdDescription />
              </div>
            </div>

            <div className="input-group">
              <input required="required" type="text" id="form__lastname" />
              <label htmlFor="form__lastname">Apellidos</label>
              <div className="input__icon">
                <MdDescription />
              </div>
            </div>
          </div>

          <div className="form__input-group">
            <div className="input-group">
              <input required="required" type="tel" id="form__phone" />
              <label htmlFor="form__phone">Telefono</label>
              <div className="input__icon">
                <FaPhoneAlt />
              </div>
            </div>

            <div className="input-group">
              <input required="required" type="text" id="form__lastname" />
              <label htmlFor="form__lastname">Dirección</label>
              <div className="input__icon">
                <TbBuildingEstate />
              </div>
            </div>
          </div>

          <div className="form__input-group">
            <div className="input-group">
              <input required="required" type="text" id="form__name" />
              <label htmlFor="form__name">Ciudad</label>
              <div className="input__icon">
                <MdLocationCity />
              </div>
            </div>

            <div className="input-group">
              <input required="required" type="text" id="form__province" />
              <label htmlFor="form__province">Provincia</label>
              <div className="input__icon input__icon--special">
                <GrMapLocation />
              </div>
            </div>
          </div>

          <div className="input-group">
            <input required="required" type="text" id="form__email" />
            <label htmlFor="form__email">Correo electrónico</label>
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
