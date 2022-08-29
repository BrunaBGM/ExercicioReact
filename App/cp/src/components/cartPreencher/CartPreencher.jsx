import React,{useState} from 'react'
import Perfil from '../carteirinha/anonima.jpg'

export default ()=> {

    const[name, setName] = useState('')
    const[rm, setRm] = useState('')
    const[curso, setCurso] = useState('')
    const[turma, setTurma] = useState('')

    return(
        <>
       
        <div style={{flex:'wrap',backgroundColor:'black',
        width:'300px',
        height:'350px',
        padding:'10px',        
        borderSolid:'1px',
        borderRadius:'20px',
        border: '2px solid red',
        color: 'white',
        textAlign: 'center'
        }}>
        <img src={Perfil} alt="foto.perfil" style={{width:'50px'}}/>
        <label></label><p>Nome - {name}</p>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <label></label><p>Rm - {rm}</p>
        <input type="text" onChange={(e)=>setRm(e.target.value)}></input>
        <label></label><p>Curso - {curso}</p>
        <input type="text" onChange={(e)=>setCurso(e.target.value)}></input>
        <label></label><p>Turma - {turma}</p>
        <input type="text" onChange={(e)=>setTurma(e.target.value)}></input>
        </div>
        </>
    )
}

