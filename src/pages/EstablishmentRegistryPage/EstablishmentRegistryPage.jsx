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
import { createUser, getUsers } from '../../api/usersAPI';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function EstablishmentRegistryPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  const addUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log('Establishment created successfully');
      console.log(users);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const establishment = Object.fromEntries(formData);

    addUserMutation.mutate({
      id: users.length + 1,
      isEstablishment: true,
      ...establishment
    });
  };

  return (
    <>
      <RegistryTabs isClient={false} />

      <main className="main main-registry-establishment">
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

          <div className="form__input-group">
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
                name="address"
                id="form__address"
              />
              <label htmlFor="form__address">Dirección</label>
              <div className="input__icon">
                <TbBuildingEstate />
              </div>
            </div>
          </div>

          <div className="form__input-group">
            <div className="input-group">
              <input
                required="required"
                type="text"
                name="city"
                id="form__city"
              />
              <label htmlFor="form__city">Ciudad</label>
              <div className="input__icon">
                <MdLocationCity />
              </div>
            </div>

            <div className="input-group">
              <input
                required="required"
                type="text"
                name="province"
                id="form__province"
              />
              <label htmlFor="form__province">Provincia</label>
              <div className="input__icon input__icon--special">
                <GrMapLocation />
              </div>
            </div>
          </div>

          <div className="input-group">
            <input
              required="required"
              type="text"
              name="email"
              id="form__email"
            />
            <label htmlFor="form__email">Correo electrónico</label>
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
