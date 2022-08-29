import React from 'react'
import Semaforo from './components/semaforo/Semaforo'
import Carro from './components/Carro/Carro'
import Carteirinha from './components/carteirinha/Carteirinha'
import Carteirinha2 from './components/carteirinha/Carteirinha2'
import Carteirinha3 from './components/carteirinha/Carteirinha3'
import CartPreencher from './components/cartPreencher/CartPreencher'



export default function App(){
    let paragr={
        textAlign:'justify',
        color:'purple',
        textIdent:'50px',
        fontSize:'2em'
    }
    return(
        <>
      <h1 style={paragr}>Bruna Gabriela Moreira</h1>
      <h2 style={{fontSize:'1em',color:'red'}}>RM96283</h2>
      <h3 style={{fontSize:'1em',color:'blue'}}>1TDSR</h3>
      <Semaforo/>
      <Carro/>
      <Carteirinha/>
      <Carteirinha2/>
      <Carteirinha3/>
      <CartPreencher/>
      </>
    )
}