import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseClient" ;

const Message = ({message, date, email}) => {

    const [user, setUser ] = useState("") ;

    const getSession = async () => {

        const { data } = await supabase.auth.getSession() ;

        if (data.session && data.session.user) {  setUser(data.session.user.email) ;  }
        
        console.log(data.session?.user?.email) ;

    }

    useEffect( () => { getSession() } , [] ) ; 

    return(

        <div className={ `card ${user == email ? "me" : "" } ` } >

       <div className="message-body"> 

                <p> {message} </p>

                <span className="fecha"> {formatDate(date)} </span>
                
         </div>

        <span className="user-email"> 

            { user == email ? "me" : email.split('@')[0] } 
            
        </span>

        </div>

    ) ; 

}

export default Message ; 