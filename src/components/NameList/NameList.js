import React from 'react';
import Name from './Name/Name';
import classes from './NameList.module.css'

const  nameList=(props)=>{

   
    const names=props.data
    .filter((person,i)=>{
        return(
            props.favourites.indexOf(person.id)===-1
        )
    })
    .map((person,i)=>{
        return (
        <Name 
            id={person.id}
            key={i}
            info={person}
            handleFavourites={(id)=>props.addFavourites(id)}
        />
        )
    })
    // console.log(names);

return(
<ul>
    {names}
</ul>
)

}

export default nameList;