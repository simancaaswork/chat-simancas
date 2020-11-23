import { useState, useContext } from 'react'
import { ChatContext } from '../../../context/ChatContext'

import FormLogin from './FormLogin'

const Login = () => {

    const chatContext = useContext(ChatContext)
    const { userOnline } = chatContext

    const [ showLogin, setShowLogin ] = useState('')

    return ( 
        <div className={`fixed-wrapper-input ${showLogin}`}>
            <div className="content-fixed-wrapper">
                <div className="content-info-fixed">
                    <i className="fas fa-comments"></i>
                    <div className="info-welcome">
                        <h3>Habla con tus amigos <strong>Online</strong></h3>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
                <FormLogin 
                  userOnline={userOnline}
                  setShowLogin={setShowLogin}  
                />
                <div className="bg-content"><i className="far fa-comment-alt"></i></div>
            </div>
        </div>
     );
}
 
export default Login;