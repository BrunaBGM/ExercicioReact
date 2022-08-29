import React from 'react'

export default props=>{

    const carros=['Porsche','Ferrari','Lamborguini','Camaro','Jaguar','BMW','Tesla','Audi','McLaren','Mercedes']

    return(
        <>
        <h2 style={{color:'grey'}}>
            Carros de Luxo!
        </h2>
        <ul>
                {carros.map((c)=> <li>{c}</li>)}
        </ul>
        {props.children}
        </>
    )
}