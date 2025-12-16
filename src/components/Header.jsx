import Arrow from "./icons/Arrow" ;
import Dots from "./icons/Dots" ;
import { supabase } from "../supabaseClient" ;
import { getAvatar } from "../helpers/getAvatar";
import { useState } from "react" ;

const Header = ({ remoteUserEmail }) => {

  const [open, setOpen] = useState(false) ;

  const handleLogout = async () => {

    await supabase.auth.signOut() ;

    window.location.reload() ;
  } ;

  return (

    <div className="header">

      <div className="left">

        <p className="logout" onClick={handleLogout}>

          <Arrow />
          
        </p>

        <img src={`/avatars/avatar-${getAvatar(remoteUserEmail)}.jpg`} alt="avatar" />

        <p className="name">

          {remoteUserEmail.split("@")[0]}

          <span>Online</span>

        </p>

      </div>

      <div className="menu">

        <p className="dots" onClick={() => setOpen(o => !o)}>

          <Dots />

        </p>

        <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogout}>

          Logout

        </div>

      </div>

    </div>

  ) ;
} ;

export default Header ;
