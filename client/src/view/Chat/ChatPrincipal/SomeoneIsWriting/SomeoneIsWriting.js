import { useEffect } from 'react';

const SomeoneIsWriting = ({ someoneIsWriting, setSomeoneIsWriting }) => {

    useEffect(() => {
        if(someoneIsWriting) {
            setTimeout(() => {
                setSomeoneIsWriting(null)
            }, 2000)
        }

    }, [someoneIsWriting, setSomeoneIsWriting])

    if(someoneIsWriting === null) {
        return null
    }

    return ( 
        <div className="somebody-is-writing">
            <span>{someoneIsWriting} esta escribiendo...</span>
        </div>
     );
}
 
export default SomeoneIsWriting;