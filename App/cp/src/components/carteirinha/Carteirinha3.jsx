import React,{useState} from 'react'
import Foto3 from '../carteirinha/peach.jpg'

export default ()=>{
    const[dados3]=useState({
    nome:"Peach",
    rm:"54321",
    curso:"1CE",
    turma:"A",

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
        <img src={Foto3} alt="foto.perfil" style={{width:'50px'}}/>
       <h3>Carteirinha do Estudante</h3>
       <p>Nome:{dados3.nome}</p>
       <p>RM:{dados3.rm}</p>
       <p>Curso:{dados3.curso}</p>
       <p>Turma:{dados3.turma}</p>
       </div>
    </>
)
}