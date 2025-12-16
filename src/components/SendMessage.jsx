import { supabase } from '../supabaseClient';
import Send from './icons/Send' ;
import { useState, useEffect } from 'react' ;


const SendMessage = ({ scroll }) => {

    const[ newMessage, setNewMessage ] = useState("") ;

    const[user, setUser] = useState("") ;

    const sendMessage = async e => { 
        
        e.preventDefault() ;

        if(newMessage !== ""){

            const insert = await supabase.from("messages").insert({content: newMessage, email: user}) ;

          //   console.log(insert) ;
 
          setNewMessage("") ;

        }

      //  console.log(newMessage) ;

      
      
       } ;


    const getSession = async () => {
        
            const { data } = await supabase.auth.getSession() ;
                
             setUser(data.session.user.email) ;
        
            }
        
            useEffect( () => { getSession() } , [] ) ; 
        




    return (

        <section className="send-message"> 

            <form onSubmit={sendMessage}>

                <input type="text" name="message" placeholder="Write your message"

                        onChange={e => setNewMessage(e.target.value)} 
                        
                        value={newMessage}/>

                <button type="submit"> <Send/> </button>

            </form>



        </section>

    ) ; 
}

export default SendMessage ;