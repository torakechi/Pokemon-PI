import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonName } from '../redux/actions';
import s from '../styles/searchBar.module.css'
export default function SearchBar (){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);

    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPokemonName(name))
        setName("")
    }

return (
        <div className={s.container}>
           <input
           className={s.txt}
           value = {name}
           type = "text"
           placeholder = "Search your Pokemon here..."
           onChange= {(e)=>handleInputChange(e)}
           />     
           <button className={s.btn} type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )
}