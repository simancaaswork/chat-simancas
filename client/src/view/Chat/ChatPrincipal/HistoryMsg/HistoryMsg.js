import { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../../../../context/ChatContext'
import moment from 'moment'
import 'moment/locale/es-mx'

const HistoryMsg = () => {

    const chatContext = useContext(ChatContext)
    const { msgHistory } = chatContext

    useEffect(() => {
        scrollToBottom()

    }, [msgHistory])

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }

    return ( 
        <div className="history-msgs-chat">
            {msgHistory.map((messageInfo) => {
                const { message, user, sent_at, type } = messageInfo
                const dateMsg = moment(sent_at).locale('es-mx').fromNow()

                return(
                    <div className={`msg-box-${type}`}>
                        <span className="main-msg">{message}</span>
                        <div className="info-msg-box">
                            <span className="name-user">{user}</span>
                            <span className="date-msg-info">{dateMsg}</span>
                        </div>
                    </div>
                )
            })}
            <div ref={messagesEndRef} />
        </div>
     );
}
 
export default HistoryMsg;