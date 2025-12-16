import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabaseClient";
import Message from "./Message";
import Header from "./Header";
import SendMessage from "./SendMessage";

const Messages = () => {

  const [messages, setMessages] = useState([]) ;

  const [remoteUser, setRemoteUser] = useState(null) ;

  const scroll = useRef() ;

  const getSessionAndMessages = async () => {

    const { data: sessionData } = await supabase.auth.getSession() ;
    
    const myEmail = sessionData.session.user.email;

    const { data, error } = await supabase.from("messages").select("*") ;

    if (!error) {

      setMessages(data) ;

      const otherUser = data.find(m => m.email !== myEmail) ;

      if (otherUser) {

        setRemoteUser(otherUser.email) ;
      }
    }
  } ;

  useEffect(() => {

    getSessionAndMessages() ;}, []) ;

  return (

    <section className="messages">

      <Header remoteUserEmail={remoteUser} />

      <div className="content">

        {messages.map((item, index) => (

          <Message

            key={index}
            message={item.content}
            date={item.created_at}
            email={item.email}

          />

        ))}

        <span ref={scroll}></span>

      </div>

      <SendMessage scroll={scroll} />

    </section>
  ) ;
} ;

export default Messages ;
