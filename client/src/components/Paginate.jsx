import React from "react";
import s from "../styles/paginate.module.css"
export default function Paginate({pokemonsPerPage, allPokemons, paginate}){
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className={s.paginate}>
                {pageNumbers && pageNumbers.map(number=>(
                     <li className={s.number}>
                    <a onClick={()=> paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}