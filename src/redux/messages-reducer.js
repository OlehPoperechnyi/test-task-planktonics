const ADD_MESSAGE = 'ADD_MESSAGE';
const EDIT_MESSAGE = 'EDIT_MESSAGE';
const CHANGE_CHAT = 'CHANGE_CHAT';

let initialState = {
    chatsList: {
        activeChatId: 1,
        chats: [
            {
                name: 'WorksChat',
                id: 1,
                avaUrl: '',
                mediaFiles: [{}],
            },
        {
            name: 'flood',
            id: 2,
            avaUrl: '',
            mediaFiles: [{}]
        }
        ]
    },
    users: [
        {userId: 21, name: 'Andrey', avaUrl: '', mediaFiles: [{}]},
        {userId: 22, name: 'Kate', avaUrl: '', mediaFiles: [{}]},
        {userId: 23, name: 'Helen', avaUrl: '', mediaFiles: [{}]},
        {userId: 24, name: 'Anna', avaUrl: '', mediaFiles: [{}]},
        {userId: 25, name: 'Denis', avaUrl: '', mediaFiles: [{}]},
        {userId: 26, name: 'Daniil', avaUrl: '', mediaFiles: [{}]},
        {userId: 27, name: 'Sergey', avaUrl: '', mediaFiles: [{}]}
    ],
    messages: [
        {chatId: 1, userId: 21, message: 'Hi!', messageId: 1},
        {chatId: 1, userId: 21, message: 'How are you?', messageId: 2},
        {chatId: 2, userId: 23, message: 'WTF!!!', messageId: 3},
        {chatId: 2, userId: 23, message: 'Sorry', messageId: 4},
        {chatId: 1, userId: 25, message: 'Not for you', messageId: 5},
        {chatId: 2, userId: 26, message: 'I am Helga.', messageId: 6},
        {chatId: 2, userId: 27, message: 'I am fine.', messageId: 7},
        {chatId: 1, userId: 21, message: 'Hi!', messageId: 8},
        {chatId: 1, userId: 22, message: 'How are you?', messageId: 9},
        {chatId: 2, userId: 22, message: 'WTF!!!', messageId: 10},
        {chatId: 2, userId: 24, message: 'Sorry', messageId: 11},
        {chatId: 1, userId: 24, message: 'Not for you', messageId: 12},
        {chatId: 2, userId: 26, message: 'I am Helga.', messageId: 13},
        {chatId: 2, userId: 27, message: 'I am fine.', messageId: 14}
    ]
};

export const changeChat = (chatId) => ({
    type: CHANGE_CHAT,
    chatId
})

export const addMessage = (message, chatId, userId) => ({
    type: ADD_MESSAGE,
    message,
    chatId,
    userId
});
export const editMessage = (message, messageId) => ({
    type: EDIT_MESSAGE,
    message,
    messageId
});


const messagesReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state
    }
    switch (action.type) {
        case CHANGE_CHAT: {
            stateCopy.chatsList = {
                ...state.chatsList,
                activeChatId: action.chatId
                };
            return stateCopy;
        }
        case ADD_MESSAGE: {
            stateCopy.messages = [
                ...state.messages,
                {
                    chatId: action.chatId,
                    userId: action.userId,
                    message: action.message,
                    messageId: state.messages.length + 1
                }];
            return stateCopy;
        }
        case EDIT_MESSAGE: {
            stateCopy.messages = stateCopy.messages.map( e => {
                if (e.messageId === action.messageId) {
                    return {
                        ...e,
                        message: action.message
                    }
                } else return e;
            });
            return stateCopy;
        }
        default: {
            return stateCopy;
        }
    }
};

export default messagesReducer;