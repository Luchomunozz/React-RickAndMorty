import React, { useState, useEffect } from 'react'
import { Card } from '../../UI/Card/Card'
import { SelectButton } from '../../UI/SelectButton/SelectButton'
import './Main.css'

export const Main = () => {
    const api = 'https://rickandmortyapi.com/api/character'

    const [characters, setCharacters] = useState([]);
    const [charactersSearch, setCharactersSearch] = useState([]);
    const [character, setCharacter] = useState({});
    const [selectAllCharacters, setSelectAllCharacters] = useState(false);
    const [notSelectCharacters, setNotSelectCharacters] = useState(false);

    const fetchApi = (id) => {
        fetch(`${api}/${id}`)
            .then(response => response.json())
            .then(response =>{ 
                if(id !== ""){
                    if(id.includes('name')) {
                        setCharactersSearch(response.results)
                    } else
                    setCharacter(response)
                }else
                    setCharacters(response.results)
            })
    }

    const getValueOption = (e) => {
        setNotSelectCharacters(true)
        if(e.target.value === 'allCharacters'){
            setSelectAllCharacters(true)
            fetchApi("")
        }
        else if (e.target.value === ''){}
        else {
            fetchApi(e.target.value)
            setSelectAllCharacters(false)  
        }           
    }

    useEffect(() => {
        fetchApi("")
    },[])

    return (
        <main>
            <header className="header_select_characters">   
                <div className="center_header">     
                    <SelectButton options={characters} funct={getValueOption} text="Seleccione un personaje" /> 
                </div>
            </header>

            <div className="center_main">                 
                <section className="container_card">
                    {
                        notSelectCharacters && (                
                            selectAllCharacters ?          
                                charactersSearch?.map(item => (
                                    <Card key={item.id} info={item} />
                                ))
                                :
                                <Card key={character.id} info={character} />              
                        )
                    }
                </section>
            </div>
        </main>
    )
}