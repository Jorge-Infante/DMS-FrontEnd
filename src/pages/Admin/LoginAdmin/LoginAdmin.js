import React from 'react'
import './LoginAdmins.scss'
import {LoginForm} from '../../../components/Admin';

export const LoginAdmin = () => {
  return (
    <div className='login-admin'>
      <div className='login-admin__content'>
        <h1>Iniciar sesión</h1>
        <LoginForm />
      </div>
    </div>
  )
}
