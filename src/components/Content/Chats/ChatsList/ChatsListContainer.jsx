import {connect} from "react-redux";
import {changeChat} from "../../../../redux/messages-reducer";

import ChatsList from "./ChatsList";
import ChatItem from "./ChatItem/ChatItem";

const ChatsListContainer = (props) => {
    let chatsMap = props.chats.map(d => <ChatItem changeChat={props.changeChat}
                                                  name={d.name} id={d.id} key={d.id}/>);
    return <ChatsList chatsMap={chatsMap}/>
}

let mapDialogsStateToProps = (state) => {
    return {
        chats: state.messagesData.chatsList.chats,
    };
};

export default connect(mapDialogsStateToProps, {changeChat})(ChatsListContainer);