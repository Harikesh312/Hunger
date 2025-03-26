import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

function Navbar() {

  const [menu,setMenu] = useState("canteen");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("canteen")} className={menu === "canteen"?"active":""}>Canteen</li>
        <li onClick={()=>setMenu("Boys-cafe")} className={menu === "Boys-cafe"?"active":""}>BackBancher</li>
        <li onClick={()=>setMenu("Cafeteria")} className={menu === "Cafeteria"?"active":""}>Cafeteria</li>
        <li onClick={()=>setMenu("Tree-Cafe")} className={menu === "Tree-Cafe"?"active":""}>Tree-Cafe</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
