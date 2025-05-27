import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='container-login'>
      <div className='container-login-box'>
    <label htmlFor="">E-mail </label>
    <input type="Email"  id="Email" placeholder='Digite seu e-mail' />
    <label >Senha</label>
    <input type="Password"  id="Password" placeholder='Digite sua senha' />

    <button className='btn-log'>Fazer Login</button>
      </div>
    </div>
  )
}

export default Login
