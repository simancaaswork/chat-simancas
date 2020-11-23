const TextBox = ({ setMessage, message, sendMessage }) => {

    function somebodyIsWriting(e) {
        const { value } = e.target
        setMessage(value)

    }

    return ( 
        <form
            onSubmit={e => sendMessage(e)}
        >
            <textarea 
                cols="30" rows="10"
                placeholder="Escribe un mensaje..."
                onChange={e => somebodyIsWriting(e)}
                value={message}
                autoFocus
                required
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            ></textarea>
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
        </form>
     );
}
 
export default TextBox;