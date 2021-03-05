import style from './MessagesField.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import {compose} from "redux";
import {connect} from "react-redux";
import MessagesContainer from "./Messages/MessagesContainer";


const MessagesField = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_messages}>
                <MessagesContainer />
            </div>
            <div className={style.wrapper_newMessage}>
                <NewMessageContainer />
            </div>
        </div>
    );
}

export default compose(
    connect((state) => { return {messages: state.messages}  }, {}),
)(MessagesField);