import style from "./Messages.module.css";
import React, {useEffect} from "react";


const Messages = ({messagesMap}) => {
    //scrolling the scroll when adding a new message
    useEffect(() => {
        const objDiv = document.getElementById('messagesWrapper');
        objDiv.scrollTop = objDiv.scrollHeight;
    },[messagesMap]);

    return <div className={style.messagesWrapper} id='messagesWrapper' >
        {messagesMap}
    </div>
}

export default Messages;