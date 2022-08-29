import React from "react"
import { useState } from "react"
import Foto from '../carteirinha/eu.jpg'



export default function Carteirinha() {

    const [dados] = useState({
        
        nome:"Bruna Gabriela Moreira",
        rm:"96283",
        curso:"1TDS",
        turma:"R",
        
        })

    return (
     
         <>
        <div style={{flex:'wrap',backgroundColor:'black',
        width:'300px',
        height:'250px',
        padding:'10px',        
        borderSolid:'1px',
        borderRadius:'20px',
        border: '2px solid red',
        color: 'white',
        textAlign: 'center',
        }}>
            <img src={Foto} alt="foto.perfil" style={{width:'50px'}}/>
           <h3>Carteirinha do Estudante</h3>
           <p>Nome:{dados.nome}</p>
           <p>RM:{dados.rm}</p>
           <p>Curso:{dados.curso}</p>
           <p>Turma:{dados.turma}</p>
           </div>
        </>
    )

}