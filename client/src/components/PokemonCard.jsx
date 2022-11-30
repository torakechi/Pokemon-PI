import React from "react";
import { Link } from "react-router-dom";
import s from '../styles/pokemonCard.module.css'
import "../styles/types.css"
import { useDispatch} from "react-redux";
import { filterPokemonsByType } from "../redux/actions";


export default function PokemonCard ({name, sprite, type, id}) {
    const dispatch = useDispatch();
    function handleFilterTypes(t){
        dispatch(filterPokemonsByType(t))
}
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
                        <Link to = "/home" onClick={t=>handleFilterTypes(e)} >
                        <div>
                          <div className={e}></div>  
                        {/* <li className={s.li}>{e}</li> // remplazado por los iconos*/} 
                        </div>
                        </Link>
                    )
                 })
                }
            </ul>
           
        </div>
    )
}