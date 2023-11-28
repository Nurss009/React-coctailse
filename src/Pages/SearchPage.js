import React, {useState} from "react";
import axios from "axios";
import Coctailla from "../Components/Coctailla";

const SearchPage = () => {
    const [inputDrink, setInputDrink] = useState('')
    const [search, setSearch] = useState([])

    const handleClick=()=>{
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputDrink}`)
            .then(({data})=>{
                setSearch(data.drinks)
            })
    }

    return (
        <div className={'container'}>
            <input placeholder={'Введите название коктеля'} type="text" onChange={(e)=>setInputDrink(e.target.value)}/>
            <button onClick={handleClick}>Поиск</button>
            <Coctailla drinks={search}/>
        </div>
    )
}
export default SearchPage