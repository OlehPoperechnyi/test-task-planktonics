import {connect} from "react-redux";
import ChatsList from "./ChatsList";
import {changeChat} from "../../../../redux/messages-reducer";

let mapDialogsStateToProps = (state) => {
    return {
        chats: state.messagesData.chatsList.chats,
    };
};

export default connect(mapDialogsStateToProps, {changeChat})(ChatsList);