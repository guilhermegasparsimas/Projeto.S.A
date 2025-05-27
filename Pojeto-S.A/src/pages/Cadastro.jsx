import React from 'react'
import './Cadastro.css'
import Login from './Login'

function Cadastro() {
  return (
    <div className='container-cadastro'>
      <div className="container-cadastro-box">
        <label>Nome de usuário</label>
        <input type="text"  id="NameCliente" placeholder='Digite o nome de usuário'/>
      <label htmlFor="">Digite seu e-mail </label>
      <input type="Email"  id="Email" placeholder='Digite seu e-mail' />
        <label >Digite sua senha</label>
        <input type="Password"  id="Password" placeholder='Digite sua senha' />
        <button className='btn-cad'>Cadastrar</button>
        {/* <label htmlFor="">Já sou cadasrado!Login</label> */}
      </div>
    </div>
  )
}

export default Cadastro
