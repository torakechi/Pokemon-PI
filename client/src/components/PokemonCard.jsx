import React from "react";
import { Link } from "react-router-dom";
import s from '../styles/pokemonCard.module.css'
import "../styles/types.css"


export default function PokemonCard ({name, sprite, type, id}) {
   
    return(

        <div className={s.cardContainer}>
            <Link className={s.subrayado} to={`/pokemons/${id}`}>
                <h3 className={s.nombre}>{name}</h3>
                <img className={s.img} src= {sprite} alt= "img" width="160px" height="130px"/>
            </Link>
            <ul className={s.ul}>
                {
                 type?.map(e=>{
                    return(
                        <div>
                          <div className={e}></div>  
                        {/* <li className={s.li}>{e}</li> // remplazado por los iconos*/} 
                        </div>
                    )
                 })
                }
            </ul>
        </div>
    )
}