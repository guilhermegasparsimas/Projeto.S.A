import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='container-login'>
      <div className='container-login-box'>
    <label htmlFor="">Digite seu e-mail </label>
    <input type="Email"  id="Email" placeholder='Digite seu e-mail' />
    <label >Digite sua senha</label>
    <input type="Password"  id="Password" placeholder='Digite sua senha' />

    <button className='btn-log'>Fazer Login</button>
      </div>
    </div>
  )
}

export default Login
