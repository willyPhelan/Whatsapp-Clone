import { useEffect, useState } from "react" ;
import { supabase } from "../supabaseClient" ;
import Message from "./Message";
import Header from "./Header";

const Messages = () => {

    const [messages, setMessages] = useState([]) ; 

    const callSupabase = async () => {

    const { data, error } = await supabase.from("messages").select("*") ;



    if(error){ console.error(error) ; } else {

      setMessages(data) ; 

      console.table(data) ; // manera clara de ver lo que devuelve la api 
    
    }
  } ;

  useEffect(() => { callSupabase() } , [] ) ;

  return (

    <section className="messages">

      <Header/>

      <div className="content"> 
        
        { messages && messages.map((item, index) => (
        
                                            <Message

                                                key={index}

                                                message={item.content}

                                                date={item.created_at}

                                                email={item.email} 
      
                                                 />
                                                    ))
                                                         } 
        </div>

    </section>
  ) 
} ;

export default Messages ;
