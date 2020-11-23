import { createContext, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import socket from '../socket'

export const ChatContext = createContext()

const ChatState = ({ children }) => {

    const initialState = {
        showOptionUser: '',
        usersOnline: [],
        userOnline: null,
        userOptionShow: null,
        msgHistory: []
    }
    
    const reducer = (state, action) => {
        switch(action.type) {
            case 'SHOW_USER_OPTION':
                return {
                    ...state,
                    showOptionUser: 'active',
                    userOptionShow: action.payload
                }
            
            case 'HIDE_USER_OPTION':
                return {
                    ...state,
                    showOptionUser: ''
                }

            case 'USER_ONLIE':
                return {
                    ...state,
                    userOnline: action.payload
                }

            case 'ADD_NEW_USER':
                return {
                    ...state,
                    usersOnline: action.payload
                }

            case 'UPDATE_USERS_CONNECTED':
                return {
                    ...state,
                    usersOnline: action.payload
                }

            case 'NEW_MSG_TO_HISTORY':
                return {
                    ...state,
                    msgHistory: [...state.msgHistory, action.payload]
                }

            case 'ADD_MSG_TO_HISTORY_BY_SENDER':
                return {
                    ...state,
                    msgHistory: [...state.msgHistory, action.payload]
                }

            default:
                return state;

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        socket.on('add new user', (user) => {
            dispatch({
                type: 'ADD_NEW_USER',
                payload: user
            })
        })

        socket.on('update users connected', users => {
            dispatch({
                type: 'UPDATE_USERS_CONNECTED',
                payload: users
            })
        })

        socket.on('msgHistory', (data) => {

            dispatch({
                type: 'NEW_MSG_TO_HISTORY',
                payload: data
            })
        })

        window.addEventListener('beforeunload', function(e) {
            e.preventDefault()
            socket.emit('delete user')
        })
    }, [])


    function showUserOption(id) {
        const user = state.usersOnline.filter((user) => user.id === id)[0]
    
        dispatch({
            type: 'SHOW_USER_OPTION',
            payload: user
        })
    }

    function hideUserOption() {
        dispatch({
            type: 'HIDE_USER_OPTION'
        })
    }

    function userOnline(user) {
        user.id = uuidv4()
        user.connectedAt = Date.now()
        dispatch({
            type: 'USER_ONLIE',
            payload: user
        })

        socket.emit('new user connected', user, (error) => {
            if(error) {
                console.log(error)
            }
        })
    }

    function addMessageToHistoy(message) {
        let messageSender = {
            message,
            user: state.userOnline.name,
            sent_at: Date.now(),
            id: state.userOnline.id,
            type: 'sender'
        }

        dispatch({
            type: 'ADD_MSG_TO_HISTORY_BY_SENDER',
            payload: messageSender
        })
    }

    function sendGreeting(greeting) {
        console.log(greeting)
    }

    return(
        <ChatContext.Provider
            value={{
                /*  States  */
                showOptionUser: state.showOptionUser,
                usersOnline: state.usersOnline,
                userOptionShow: state.userOptionShow,
                userOnlineInfo: state.userOnline,
                msgHistory: state.msgHistory,
                /*  Functions   */
                showUserOption,
                hideUserOption,
                userOnline,
                addMessageToHistoy,
                sendGreeting
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export default ChatState;