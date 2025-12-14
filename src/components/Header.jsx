import Arrow from './icons/Arrow' ;
import { supabase } from '../supabaseClient' ;
import { useState, useEffect } from 'react';
import Dots from './icons/Dots';

const Header = () => {

    const [user, setUser] = useState("Juan")

      const handleLogout = async () => {

        const { error } = await supabase.auth.signOut() ; 

        window.location.reload() ;
    
    } ;


        const getSession = async () => {
    
            const { data } = await supabase.auth.getSession() ;
            
            setUser(data.session.user.email) ;
    
        }
    
        useEffect( () => { getSession() } , [] ) ; 
    

    return (

        <div className="header" > 
        
            <div className="left">
                
                <p className="logout" onClick={handleLogout}> <Arrow /> </p>

                <img src="/avatars/avatar-1.jpg" alt="avatar1" />

                <p className='name'> { user.split('@')[0] } 

                <span> Online </span>

                </p>

            </div>

            <p className='dots'> <Dots/> </p>

        </div>

    ) } ;

export default Header ;
        