import { useEffect, useRef, useState } from "react" ;
import { supabase } from "../supabaseClient" ;
import Message from "./Message" ;
import Header from "./Header" ;
import SendMessage from "./SendMessage" ;

const Messages = () => {

  const [messages, setMessages] = useState([]) ;

  const [userEmail, setUserEmail] = useState(null) ;

  const scrollRef = useRef(null);

  useEffect(() => {

    const getSession = async () => {

      const { data } = await supabase.auth.getSession() ;

      setUserEmail(data.session.user.email) ;
    } ;

    getSession() ;

  }, []) ;

  useEffect(() => {

    const fetchMessages = async () => {

      const { data, error } = await supabase

        .from("messages")
        .select("*")
        .order("created_at", { ascending: true }) ;

      if (!error) setMessages(data) ; } ;

    fetchMessages() ; }, []) ;

  useEffect(() => {

    const channel = supabase.channel("messages-realtime").on("postgres_changes",
       
        { event: "INSERT", schema: "public", table: "messages" },payload => {

          setMessages(prev => [...prev, payload.new]) ;

          scrollRef.current?.scrollIntoView({ behavior: "smooth" }) ;
        }
      ).subscribe();

    return () => {

      supabase.removeChannel(channel) ; } ; }, []) ;

  const remoteUserEmail =messages.find(m => m.email !== userEmail)?.email ?? "Usuario";

  

  return (

    <section className="messages">

      <Header remoteUserEmail={remoteUserEmail} />

      <div className="content">

        {messages.map((msg, index) => (

          <Message

            key={index}
            message={msg.content}
            date={msg.created_at}
            email={msg.email}
            isOwn={msg.email === userEmail}


            isRead={msg.is_read || false} 
          
          />

          
        ))}

        <span ref={scrollRef} />
        
      </div>

      <SendMessage />

      
      
    </section>

    

  ) ;
} ;

export default Messages ;
