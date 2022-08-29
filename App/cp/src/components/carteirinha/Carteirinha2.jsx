import React,{useState} from 'react'
import Foto2 from '../carteirinha/mario.jpg'

export default ()=>{
    const[dados2]=useState({
    nome:"Mario",
    rm:"12345",
    curso:"1EC",
    turma:"T",

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
        textAlign: 'center'
        }}>
        <img src={Foto2} alt="foto.perfil" style={{width:'50px'}}/>
       <h3>Carteirinha do Estudante</h3>
       <p>Nome:{dados2.nome}</p>
       <p>RM:{dados2.rm}</p>
       <p>Curso:{dados2.curso}</p>
       <p>Turma:{dados2.turma}</p>
       </div>
    </>
)
}