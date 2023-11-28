// import React from "react";
// import Coctailcard from "./Coctailcard";
//
// const CoctailList=({drinks})=>{
//     return(
//         <div className={'row'}>
//             {
//                 drinks.map(drink=>
//                     <div key={drink.idDrink} className={'col-3'}>
//                         <Coctailcard drink={drink}/>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }
// export default CoctailList

import React from "react";
import Coctailcard from "./Coctailcard";

const CoctailList = ({ drinks }) => {
    return (
        <div className={'row'}>
            {drinks.map((drink) => (
                <div key={drink.idDrink} className={'col-3'}>
                    <Coctailcard drink={drink} />
                </div>
            ))}
        </div>
    );
};

export default CoctailList;