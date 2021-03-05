import { addMessage } from '../../../../../redux/messages-reducer';
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {reset} from "redux-form";


let mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        chatId: state.messagesData.chatsList.activeChatId
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (newText, chatId, userId) => {
            debugger;
            dispatch(addMessage(newText, chatId, userId));
            dispatch(reset('newMessage'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
