import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("canteen");

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}>Home</Link>
        <Link to='/canteen' onClick={()=>setMenu("canteen")} className={menu === "canteen"?"active":""}>Canteen</Link>
        <li onClick={()=>setMenu("Boys-cafe")} className={menu === "Boys-cafe"?"active":""}>BackBancher</li>
        <li onClick={()=>setMenu("Cafeteria")} className={menu === "Cafeteria"?"active":""}>Cafeteria</li>
        <li onClick={()=>setMenu("Tree-Cafe")} className={menu === "Tree-Cafe"?"active":""}>Tree-Cafe</li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
