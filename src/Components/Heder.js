import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <header>
            <nav>
                <Link className={'nav'} to={'/'}>Домой</Link>
                <Link className={'nav'} to={'/search'}>Найти коктейль</Link>
            </nav>
        </header>
    )
}
export default Header