import { useState } from 'react'

import avatar1 from '../../../../assets/img/avatar/1.jpg'
import avatar2 from '../../../../assets/img/avatar/2.jpg'
import avatar3 from '../../../../assets/img/avatar/3.jpg'
import avatar4 from '../../../../assets/img/avatar/4.jpg'

const FormLogin = ({ userOnline, setShowLogin }) => {

    const [ user, setUser ] = useState({
        name: '',
        feeling: '',
        bio: '',
        avatar: ''

    })

    const [ alertSelectAnAvatar, setAlertSelectAnAvatar ] = useState('')

    let [ avataresUser, setAvataresUser ] = useState([
        {
            id: 1,
            image: avatar1,
            style: ''
        },
        {
            id: 2,
            image: avatar2,
            style: ''
        },
        {
            id: 3,
            image: avatar3,
            style: ''
        },
        {
            id: 4,
            image: avatar4,
            style: ''
        },
    ])

    function catchUser(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const [ biggerImage, setImageBigger ] = useState('')

    function connectUser(e) {
        e.preventDefault()

        if(user.avatar === '') {
            setAlertSelectAnAvatar('alert')
            return
        }
        userOnline(user)
        setShowLogin('hide')
    }

    function imageSelected(id) {
        setUser({
            ...user,
            avatar: avataresUser.filter((avatar) => avatar.id === id)[0].image
        })

        setAvataresUser([
           avataresUser = avataresUser.filter((avatar) => avatar.id === id)[0]
        ])
        setImageBigger('bigger')
    }

    return ( 
        <div className="content-form-fixed">
            <div className={`select-a-avatar-wrapper ${biggerImage}`}>
                <div className="avatares-grid">
                    {avataresUser.map((image) => (
                        <img src={image.image} 
                            key={image.id} 
                            onClick={() => imageSelected(image.id)}
                            alt='Avatar icon'
                            className={biggerImage}
                        />
                    ))}
                </div>
                <span className={alertSelectAnAvatar}>Selecciona un avatar</span>
            </div>
            <form
                onSubmit={e => connectUser(e)}
            >
                <input type="text" 
                    name="name" 
                    placeholder="Escríbe tu nombre..." 
                    required
                    autoFocus
                    onChange={e => catchUser(e)}
                />
                <input type="text" 
                    name="bio" 
                    placeholder="Descripción breve"
                    onChange={e => catchUser(e)}
                />
                <select name="feeling" 
                    required
                    onChange={e => catchUser(e)}
                >
                    <option value="">¿Cómo te sientes?</option>
                    <option value="Feliz">Feliz</option>
                    <option value="Triste">Triste</option>
                    <option value="Ocupado">Ocupado</option>
                    <option value="Chill">Chill</option>
                </select>
                <button type="submit"><i className="fas fa-sign-in-alt"></i> Entrar</button>
            </form>
        </div>
     );
}
 
export default FormLogin;