import style from "./Content.module.css";
import {Route} from "react-router-dom";
import InformationAbout from "./InformationAbout/InformationAbout";
import LoginContainer from "./Login/LoginContainer";
import React from "react";
import Chats from "./Chats/Chats";

const Content = () => {
    return (
        <div className={style.contentWrapper}>
            <Route path="/chats/:id" render={ () => <Chats /> }/>
            <Route path="/info/:id" render={ () => <InformationAbout /> }/>
            <Route path=""  render={ () => <LoginContainer /> }/>
        </div>
    );
}


export default Content;