import AuthorDeveloper from './AuthorDeveloper'
import UsersConnected from './UsersConnected'

const Aside = () => {
    return ( 
        <section className="aside-chat-information">
            <AuthorDeveloper />
            <UsersConnected />
            <div className="user-online-alert-mobile">
                <span>~ Usuarios conectados</span>
            </div>
        </section>
     );
}
 
export default Aside;