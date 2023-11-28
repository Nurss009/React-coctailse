import React from "react";
import {Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomPage";
import Header from "./Components/Heder";
import IngredientPage from "./Components/IngredientPage";
import FooterPage from "./Pages/Foter";
import CoctailPage from "./Pages/CoctailPage";
import SearchPage from "./Pages/SearchPage";

const App =()=>{
    return(
        <>
            <Header/>
         <Routes>
                 <Route path='/' element={<HomePage/>}/>
                 <Route path='/search' element={<SearchPage/>}/>
                 <Route path='/drinks/:idDrink' element={<CoctailPage/>}/>
                 <Route path='/ingredient/:name' element={<IngredientPage/>}/>
         </Routes>
            <FooterPage/>
        </>
    )
}
export default App
