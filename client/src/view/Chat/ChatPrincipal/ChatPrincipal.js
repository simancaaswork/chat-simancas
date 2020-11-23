import { useEffect, useState, useContext } from 'react'
import { ChatContext } from '../../../context/ChatContext'
import socket from '../../../socket'


import HistoryMsg from './HistoryMsg'
import TextBox from './TextBox'
import Greeting from './Greeting'
import SomeoneIsWriting from './SomeoneIsWriting'

const ChatPrincipal = () => {

    const [ message, setMessage ] = useState('')
    const [ someoneIsWriting , setSomeoneIsWriting ] = useState(null)

    const chatContext = useContext(ChatContext)
    const { userOnlineInfo, addMessageToHistoy } = chatContext

    function sendMessage(e) {
        e.preventDefault()
        if(message.trim()) {
            addMessageToHistoy(message)

            socket.emit('messages', { 
                message, 
                user: userOnlineInfo.name, 
                id: userOnlineInfo.id, 
                sent_at: Date.now(),
                type: 'friend'

            }, (error) => {

                if(error) {
                    console.log(error)
                }
            })
            
            setMessage('')
        }

        setMessage('')
    }

    useEffect(() => {
        if(message) {

            const { name, id } = userOnlineInfo

            socket.emit('somebody is writing', { name, id  })
        }

        socket.on('is writing', (msg) => {
            setSomeoneIsWriting(msg)
        })

    }, [message, userOnlineInfo])

    return ( 
        <section className="chat-principal">
            <HistoryMsg />
            <TextBox 
                setMessage={setMessage}
                message={message}
                sendMessage={sendMessage}
            />
            <Greeting />
            <SomeoneIsWriting 
                setSomeoneIsWriting={setSomeoneIsWriting}
                someoneIsWriting={someoneIsWriting}
            />
        </section>
     );
}
 
export default ChatPrincipal;