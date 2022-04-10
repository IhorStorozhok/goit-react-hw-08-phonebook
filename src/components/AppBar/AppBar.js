import React from "react";
import { Link } from "react-router-dom";

import s from "./AppBar.module.css";
const AppBar = ({ elements,  }) => {
    


    return <nav><ul className={s.list}>{elements.map(el => {
        return <Link  to={el === "Phonebook" ? "/" : `/${el.toLowerCase().replace(/ /g, '')}`} >
           
            <li className={s.listElement} key={'1'}>{el}</li>
        </Link>
    })}</ul></nav>
}
export default AppBar