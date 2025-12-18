import Arrow from "./icons/Arrow" ;
import Dots from "./icons/Dots" ;
import { supabase } from "../supabaseClient" ;
import { getAvatar } from "../helpers/getAvatar";
import { useState } from "react" ;

const Header = ({ remoteUserEmail }) => {

  const [open, setOpen] = useState(false) ;

  const handleLogout = async () => {

    await supabase.auth.signOut() ;

    window.location.href = "/" ;
  } ;

  
  const names = {
    "sadisticloverecords@gmail.com": "Juan", "phelanguille@gmail.com": "Willy"
  } ;


  const displayName = names[remoteUserEmail] || (remoteUserEmail ? remoteUserEmail.split("@")[0] : "Cargando...") ;

  const avatarId = getAvatar(remoteUserEmail) ;

  return (

    <div className="header">

      <div className="left">

        <div className="logout" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <Arrow />
        </div>

        <img src={`public/avatars/avatar-${avatarId}.jpg`} alt="avatar" />

        <p className="name">
          {displayName}
          <span>Online</span>
        </p>

      </div>

      <div className="menu">

        <div className="dots" onClick={() => setOpen(o => !o)} style={{ cursor: 'pointer' }}>
          <Dots />
        </div>

        <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogout} style={{ cursor: 'pointer' }}>
          Logout
        </div>

      </div>

    </div>

  ) ;
} ;

export default Header ;