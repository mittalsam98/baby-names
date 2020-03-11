import React from 'react';
import Name from '../NameList/Name/Name';
import classes from './ShortList.module.css'

const  shortList=(props)=>{

const hasFavourites=(props.favourites.length>0);
const favList=props.favourites.map((fav,i)=>{
    return(
        <Name 
        id={i}
        key={i}
        info={props.data[fav]}
        handleFavourites={(id)=>props.deleteFavourites(id)}
        />
    )
})
return(
    <div className="favourites">
        <h4>
            {hasFavourites?'YourShortList':'Click on a name to ShortList it...'}
        </h4>
        <ul> 
        {favList}
        </ul>
        {<hr />}
       
    </div>
)

}

export default shortList;