import React from "react";
import s from "./ContentContainer.module.css";

const ContentContainer = ({ children }) => { return (<div className={s.ContentContainer}>{ children}</div>) }
export default ContentContainer;