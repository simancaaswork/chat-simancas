import { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext'

const UserOption = () => {

    const chatContext = useContext(ChatContext)
    const { hideUserOption, showOptionUser, userOptionShow } = chatContext

    if(userOptionShow === null) {
        return null
    }

    const { name, feeling, avatar, bio } = userOptionShow

    return ( 
        <div className={`user-option-friendly ${showOptionUser}`}>
            <div className="content-user-option">
                <div className="header-user-option">
                    <span 
                        onClick={() => hideUserOption()}
                    >&larr;</span>
                    <h4>Dile algo a {name}</h4>
                </div>
                <div className="user-info-profile">
                    <div className="info-profile-user">
                        <img src={(avatar) ? avatar : 'http://placeimg.com/640/480/people'} alt="" />
                        <div className="status-user">
                            <h2>{name}</h2>
                            <p>{feeling} —<strong> En línea</strong></p>
                        </div>
                    </div>
                    <p className="bio">{(bio) ? bio : ''}</p>
                </div>
            </div>
        </div>
     );
}
 
export default UserOption;