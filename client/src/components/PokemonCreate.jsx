import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {postPokemon, getAllTypes} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "../styles/pokemonCreate.module.css"


export default function PokemonCreate() {
    const dispatch = useDispatch();
    const types = useSelector((state)=> state.types);
    const history = useHistory()
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        dispatch(getAllTypes());
    }, []);
  

    const[input, setInput] = useState({
        name : "",
        sprite: "",
        hp : "",
        attack : "",
        defense : "",
        specialAttack : "",
        specialDefense : "",
        speed : "",
        types : [],
        height : "",
        weight : "",
    })

    let noEmpty = /\S+/;
    let validateName = /^[a-z]+$/i;
    let validateNum = /^\d+$/;
    let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;
   
    const validate = (input) => {
        let errors = {};
        if (!noEmpty.test(input.name) || !validateName.test(input.name) || input.name.length < 3) {
        errors.name = "Name required. Only string of more than two characters and without numbers";
        }
        if (!validateNum.test(input.hp) || parseInt(input.hp) < 1 || parseInt(input.hp) > 100) {
            errors.hp = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.attack) || parseInt(input.attack) < 1 || parseInt(input.attack) > 100) {
            errors.attack = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.defense) || parseInt(input.defense) < 1 || parseInt(input.defense) > 100) {
            errors.defense = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.specialAttack) || parseInt(input.specialAttack) < 1 || parseInt(input.specialAttack) > 100) {
            errors.specialAttack = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.specialDefense) || parseInt(input.specialDefense) < 1 || parseInt(input.specialDefense) > 100) {
            errors.specialDefense = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.speed) || parseInt(input.speed) < 1 || parseInt(input.speed) > 100) {
            errors.speed = "Number required. Higher than 0. Lesser than 100";
        }
        if (!validateNum.test(input.height) || parseInt(input.height) < 1) {
            errors.height = "Number required. Higher than 0.";
        }
        if (!validateNum.test(input.weight) || parseInt(input.weight) < 1) {
            errors.weight = "Number required. Higher than 0.";
        }
        if (!validateUrl.test(input.sprite)) {
        errors.sprite = "URL required";
        }

        return errors;
    };
    
   function handleChange(e){  //maneja cada vez q se modifiquen los inputs
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input) 
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))         
    }

    const handleSelect = e => {
        if (input.types.length < 2) {
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
            e.target.value = 'Select type';
        } else {
            alert('Two types of pokemon at most')
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        if (
            !errors.name &&
            !errors.hp &&
            !errors.attack &&
            !errors.defense &&
            !errors.specialAttack &&
            !errors.specialDefense &&
            !errors.speed &&
            !errors.height &&
            !errors.weight &&
            !errors.sprite
        ) {

        dispatch(postPokemon(input));
        alert("Successfully Created Pokemon");
        setInput({
            name : "",
            sprite: "",
            hp : "",
            attack : "",
            defense : "",
            specialAttack : "",
            specialDefense : "",
            speed : "",
            types : [],
            height : "",
            weight : "",
        })
        history.push("/home");
    } else {
        alert('Error. Check the form');
    }    
}

const handleDelete = (e) => {
    setInput({
        ...input,
        types: input.types.filter(type => type !== e)
    })
}
    
    return(
        <div className={s.container}>
            
            <h2 className={s.h2}>Create your own Pokemon</h2>
            <form className={s.form} onSubmit={(e)=> handleSubmit(e)}>
                <div className={s.div}>
                    <div className={s.divito}>
                        <div>
                    <label className={s.label}> Name </label>
                    <input className={s.input}
                    type = "text"
                    value = {input.name}
                    name = "name"
                    placeholder ="Name..."
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.name}</p>
                    </div>
                    <div>
                    <label className={s.label}> Hp </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.hp}
                    name = "hp"
                    placeholder="1-100"
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.hp}</p>
                </div>
                <div>
                    <label className={s.label}> Defense </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.defense}
                    name = "defense"
                    placeholder="1-100"
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.defense}</p>
                </div>
                <div>
                    <label className={s.label}> SpecialDefense </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.specialDefense}
                    name = "specialDefense"
                    placeholder="1-100"
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.specialDefense}</p>
                </div>
                
                <div>
                    <label className={s.label}> Height </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.height}
                    name = "height"
                    placeholder="> 1"
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.height}</p>
                </div>
                    </div>
                
                
                <div className={s.divito}>
               
                <div>
                    <label className={s.label}> sprite </label>
                    <input className={s.input}
                    type = "text"
                    value = {input.sprite}
                    name = "sprite"
                    placeholder="Url sprite..."
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.sprite}</p>
                </div>
                
                <div>
                    <label className={s.label}> Attack </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.attack}
                    name = "attack"
                    onChange={(e)=> handleChange(e)}
                    placeholder="1-100"
                    />
                    <p className={s.p}>{errors.attack}</p>
                </div>
              
                <div>
                    <label className={s.label}> SpecialAttack </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.specialAttack}
                    name = "specialAttack"
                    onChange={(e)=> handleChange(e)}
                    placeholder="1-100"
                    />
                    <p className={s.p}>{errors.specialAttack}</p>
                </div>
              
                <div>
                    <label className={s.label}> Speed </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.speed}
                    name = "speed"
                    placeholder="1-100"
                    onChange={(e)=> handleChange(e)}
                    />
                    <p className={s.p}>{errors.speed}</p>
                </div>
                <div>
                    <label className={s.label}> Weight </label>
                    <input className={s.input}
                    type = "number"
                    value = {input.weight}
                    name = "weight"
                    onChange={(e)=> handleChange(e)}
                    placeholder="> 1"
                    />
                    <p className={s.p}>{errors.weight}</p>
                </div>
               
                </div>
                </div>
                
                <div>
                    <label className={s.label}> Select type </label>              
                <select className={s.select} onChange={(e)=> handleSelect(e)}>
                    {types?.map((ty)=>(
                        <option value={ty.name}>{ty.name}</option>
                    ))}
                </select>
                        {
                            input.types.map(e =>{
                                return (
                                    <div className={s.typesSelect}>
                                        <p className={s.pTypes}>{e}</p>
                                        <button className={s.btnDelete} onClick={()=> {handleDelete(e)}}>x</button>
                                    </div>
                                )
                            })
                        }
               
                </div>
                <div>
                <button className={s.btnCreate} type= "submit">Create</button>
                </div>
                
            </form>
            <Link to = "/home">
                <button className={s.btn}>Home</button>
            </Link>
        </div>
    )

}