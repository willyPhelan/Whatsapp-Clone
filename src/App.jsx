import { useEffect, useState } from 'react';
import './App.css'
import Login from './components/Login'
import Messages from './components/Messages'
import { supabase } from './supabaseClient' ;


function App() {
 
  const [session, setSession] = useState(null) ;

  const getSession = async () => {

    const { data } = await supabase.auth.getSession() ;

    setSession(data.session) ; }

    useEffect( () => { getSession() } , [] ) ;
 

  return (

    <div className='App'>

        <h1> Whatsapp Chat Clone </h1> 

        <p className='p-main'> Hecho con React y Supabase </p>

        

           {session ? <Messages /> : <Login />}
           
     


    </div>
   
      
  
  )
}

export default App
