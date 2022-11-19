import React from "react"
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllPokemons, getAllTypes,filterPokemonsByType, filterCreated, orderByName, orderPokemonsStats, emptyPokemon } from "../redux/actions";
import { Link, NavLink } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Navbar from "./NavBar";
import s from "../styles/home.module.css"
import Paginate from "./Paginate";
import gif from "../media/loading.gif"



export default function Home () {
    const dispatch = useDispatch();
    const types = useSelector((state)=> state.types);
    const allPokemons = useSelector((state)=>state.pokemons);
    const [currentPage, setCurrentPage] = useState(1); // pagina actual
    const [pokemonsPerPage, setPokemonPerPage] = useState(12); // cuantos pokemons por pagina
    const indexOfLastPokemon = currentPage * pokemonsPerPage // da el numero del ultimo de la pagina. deberia dar 12
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // deberia dar 0
    const currentPokemons = allPokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon); // entonces el slice que no cuenta el 12. me devuelve del 0-11 (12 pokemons)
    const [order, setOrder] = useState("");

    //paginado
    const paginate = (pagenumber) =>{
        setCurrentPage(pagenumber)
    };  
    
    useEffect(()=>{
        dispatch(getAllTypes());
    },[]);

    useEffect(()=>{
        if(!allPokemons.length)
        dispatch(getAllPokemons());
    },[]);

    function handleFilterTypes(e){
        dispatch(filterPokemonsByType(e.target.value))
        setCurrentPage(1);
}
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1);
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    }

    
    function handleClick(e){
        e.preventDefault();
        dispatch(emptyPokemon());
        dispatch(getAllPokemons());
    }

    const [valueToFilter, setValueToFilter] = useState("");
    
    function handleSortStats(e){
        e.preventDefault();
        dispatch(orderPokemonsStats(e.target.value, valueToFilter));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    }

   
   if(allPokemons.length<1) return <div className={s.gif}>
    <img className={s.gifImg} src={gif}/>
    </div>

    return(
        <div className={s.home}>
            <Link to="/pokemons"></Link>
            <Navbar />
            <h1>Henry´s Pokemon App</h1>
            <div>
            <button className={s.btn} onClick={e=> {handleClick(e)}}></button>
            </div>
            <div className={s.filterContainer}>
               
               
                <div className={s.name}>
                    <select onChange={e => handleSort(e)}>
                        <option selected disabled defaultValue>Name </option>
                        <option value ="asc">A-Z</option>
                        <option value ="desc">Z-A</option>
                    </select>
                 </div> 
                 <div className={s.stat}> 
                    <select onChange={(e)=>setValueToFilter(e.target.value)}> 
                        <option selected disabled defaultValue>Stat</option>
                        <option value ="hp">HP</option>
                        <option value ="attack">Attack</option>
                        <option value ="defense">Defense</option>
                        <option value ="specialAttack">Special Attack</option>
                        <option value ="specialDefense">Special Defense</option>
                        <option value ="speed">Speed</option>
                        <option value ="height">Height</option>
                        <option value ="weight">Weight</option>
                        <option value ="id">Id</option>
                    </select>
                    </div>
                    <div className={s.order}>
                    <select onChange={(e)=>handleSortStats(e)}>
                        <option selected disabled defaultValue>Order</option>
                        <option value ="Min to Max">Min to Max</option>
                        <option value ="Max to Min">Max to Min</option>
                    </select>
                   </div>
                   <div className={s.types}>
                    <select  onChange={e => handleFilterTypes(e)}>
                    <option selected disabled defaultValue>Type</option>
                       <option value = "All">All</option>
                       {types?.map(e =>{
                        return (
                            <option value = {e.name} key = {e.id}>
                                {e.name}
                            </option>
                        )
                       })}
                       
                    </select>
                    
                </div>
                <br></br>
                <div className={s.created}>
                    <select onChange={e => handleFilterCreated(e)}>
                    <option selected disabled defaultValue>Pokemon</option>
                        <option value ="all">All Pokemon</option>
                        <option value ="created">Pokemon Created</option>
                        <option value ="api">Existing Pokemon</option>
                    </select>
                    </div>
            </div>

               
                
               <div className={s.cardContainer}>
                {currentPokemons?.map((e)=> {
                return(
                    <PokemonCard 
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        sprite={e.sprite}
                        type={e.type}
                    />
                )
               })} 
            </div>
            <Paginate // porpiedades del componente del paginado 
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginate= {paginate}
                />
        </div>
    )

}