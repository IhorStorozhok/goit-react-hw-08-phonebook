import React from "react";
import s from "./Header.module.css";

const Header = ({children}) => {
    return (<header className={s.header}>{children}</header>)
}

export default Header