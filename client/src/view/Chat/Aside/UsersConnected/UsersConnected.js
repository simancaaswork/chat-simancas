import { useContext } from 'react'
import { ChatContext } from '../../../../context/ChatContext'
import moment from 'moment'
import 'moment/locale/es-mx'
const UsersConnected = () => {

    const chatContext = useContext(ChatContext)
    const { showUserOption, usersOnline } = chatContext
    
    return ( 
        <div className="list-users-chat">
            {usersOnline.map(user => {
                const connected_at = moment(user.connectedAt).locale('es-mx').fromNow()
                return (
                    <div className="user-info" 
                        onClick={() => showUserOption(user.id)}
                        key={user.id}
                    >
                        <div className="name-user">
                            <img src={(user.avatar) ? user.avatar : 'http://placeimg.com/640/480/people'} alt="" />
                            <div>
                                <h5>{user.name}</h5>
                                <span>{user.feeling}</span>
                            </div>
                        </div>
                        <div className="connected-date">
                            <strong>{connected_at}</strong>
                            <span>Hora de conexión</span>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default UsersConnected;