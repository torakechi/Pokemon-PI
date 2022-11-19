import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { Link, useParams } from "react-router-dom";
import { getPokemonDetails } from "../redux/actions";
import { useEffect  } from "react";
import s from "../styles/pokemonDetail.module.css"

export default function PokemonDetails(props){
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemonDetails(id)); // de esta forma accedemos al id por props

    },[])

    const myPokemon = useSelector((state)=>state.details)
   
    return(
        <div className={s.container}>
            {
                myPokemon.length>0 ?
                <div className={s.card}>
                    <img className={s.img} src={myPokemon[0].sprite} alt= "img" width="260px" height="230px"/>
                    <div className={s.circle}></div>
                    <div className={s.content}>
                    <h2 className={s.name}>{myPokemon[0].name} #{myPokemon[0].id}</h2>
                    
                    <ul className={s.type}>
                    {
                 myPokemon[0].type?.map(e=>{
                    return(
                        <div>
                          <div className={`${e} ${s.e}`}></div>  
                        </div>
                    )
                 })
                }
                </ul>
                    <div className={s.statsContainer}>
                        <ul className={s.ul}>
                          <li>Hp = {myPokemon[0].hp}</li>
                          <li>Atk = {myPokemon[0].attack}</li>
                          <li>Def = {myPokemon[0].defense}</li>
                          <li>Height = {myPokemon[0].height}</li>
                          </ul>
                          <ul className={s.ul}>
                          <li>Sp.Atk = {myPokemon[0].specialAttack}</li>
                          <li>Sp.Def = {myPokemon[0].specialDefense}</li>
                          <li>Speed = {myPokemon[0].speed}</li>
                          <li>Weight = {myPokemon[0].weight}</li>
                          </ul>
                          </div>
            
             
                </div>
                </div>: <p>Loading...</p>
            }
            <div className={s.btnContainer}>
            <Link to ="/home">
                <button className={s.btn}>Back to Home</button>
            </Link>
            </div>
        </div>
        
    )
    
}

