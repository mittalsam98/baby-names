import React from 'react';
import classes from './Name.module.css';

const  name=(props)=>{
    
let attachedClasses=[classes.boy];
if(props.info.sex==='girl'){
    attachedClasses=[classes.girl];
}

return(
   <li  
   className={attachedClasses}
   onClick={()=>props.handleFavourites(props.id)}
   >
    {props.info.name}
   </li>
)

}

export default name;