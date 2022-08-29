import React,{useState} from 'react'

export default function Semaforo(){
    const [isVisible, setIsVisible] = useState(0);
  
    const handleClick = event => {

         if (isVisible == 2 ){
            setIsVisible(0)
         }
         else{
            setIsVisible(isVisible+1);
         }
            
      };
    
    return(
        <div>
            <h2 style={{visibility: isVisible == 0 ? 'visible' : 'hidden',color:'red'}}>Pare</h2>
            <h2 style={{visibility: isVisible == 1 ? 'visible' : 'hidden',color:'yellow'}}>Atencao</h2>
            <h2 style={{visibility: isVisible == 2 ? 'visible' : 'hidden',color:'green'}}>Siga</h2>
            <button onClick={handleClick}>Alterar</button>
        </div>
    )
}