import author from '../../../../assets/img/developer/simancas.jpg'

const AuthorDeveloper = () => {
    return ( 
        <div className="developer-simancas-info">
            <img src={author} alt="" />
            <div className="info-developer">
                <h1>Héctor Simancas</h1>
                <span>FullStack developer, UI/UX designer</span>
                <div className="rrss-developer">                
                    <a href="https://github.com/simancaaswork" rel="noreferrer" target='_blank'><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/simancashl" rel="noreferrer" target='_blank'><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/hlspsimancas/" rel="noreferrer" target='_blank'><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>
        </div>
     );
}
 
export default AuthorDeveloper;