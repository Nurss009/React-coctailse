// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import Coctailla from "../Components/Coctailla";
//
// const HomePage=()=>{
//     const [drinks, setDrink]=useState([])
//
//     useEffect(() => {
//         axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
//             .then(({data})=>setDrink(data.drinks))
//     }, []);
//
//     return(
//         <div className={'container'}>
//             <h1>Все коктейли</h1>
//             <Coctailla drinks={drinks}/>
//         </div>
//     )
// }
//
// export default HomePage


import {useEffect, useState} from "react";
import axios from "axios";
import CoctailList from "../Components/Coctailla";

const HomePage = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
            .then(({ data }) => setDrinks(data.drinks))
            .catch((error) => console.error("Error fetching drinks:", error));
    }, []);

    return (
        <div className={'container'}>
            <h1>Все коктейли</h1>
            <CoctailList drinks={drinks} />
        </div>
    );
};

export default HomePage