import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return <>
  
 <header>
  <nav>
    <div className="logo"><img src={process.env.PUBLIC_URL+"/Photos/webPhotos/helixLogo.png"} alt="image is loading..." /></div>
      <ul >
        <li className='user-profile'><i className='icon' class="uil uil-user"></i> <div className='username'>username</div></li>
        <li className='user-balance'><div className="balance">balance</div> <span className='balance-value'><i class="uil uil-rupee-sign"></i> 0</span></li>
        <li className='user-wallet'><i className='icon' class="uil uil-wallet"></i></li>
        <li className='menu-icon'><i className='icon'rd class="uil uil-bars"></i></li>
      </ul>
  </nav>
 </header>
  
  </>
}

export default Navbar
