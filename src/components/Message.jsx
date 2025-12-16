import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseClient" ;
import ReadReceipt from "./ReadReceipt" ;

const Message = ({message, date, email, isRead}) => {

    const [user, setUser ] = useState("") ;

    const getSession = async () => {

        const { data } = await supabase.auth.getSession() ;

        if (data.session && data.session.user) {  setUser(data.session.user.email) ;  }
        
    }

    useEffect( () => { getSession() } , [] ) ; 

    const isOwnMessage = user == email ;

    return(

        <div className={ `card ${isOwnMessage ? "me" : "" } ` } >

           <div className="message-body"> 

                <p> {message} </p>

                <div className="time-status"> 

                    <span className="fecha"> {formatDate(date)} </span>
                    
                    {isOwnMessage && <ReadReceipt isRead={isRead} />}

                </div>
                
           </div>

           <span className="user-email"> 

            { isOwnMessage ? "me" : email.split('@')[0] } 
            
           </span>

        </div>

    ) ; 

}

export default Message ;