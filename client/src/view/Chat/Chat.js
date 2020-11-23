import { Fragment } from 'react';

/* Components import */
import Aside from './Aside'
import ChatPrincipal from './ChatPrincipal'
import UserOption from './UserOption'
import Login from './Login'

const Chat = () => {
    return ( 
        <Fragment>
            <main className="wrapper-chat">
                <Aside />
                <ChatPrincipal />
                <UserOption />
            </main>
            <Login />
        </Fragment>
     );
}
 
export default Chat;