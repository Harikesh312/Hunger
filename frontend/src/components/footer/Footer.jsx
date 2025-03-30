import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
         <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam velit quaerat culpa exercitationem aliquid mollitia sequi doloremque excepturi odio pariatur, illum voluptas, aliquam ea vero commodi cumque accusamus necessitatibus!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>    
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Canteen</li>
            <li>BackBancher</li>
            <li>Cafeteria</li>
            <li>Tree-Cafe</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>8294083237</li>
            <li>kashyapharikesh72@gmail.com</li>
          </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 @Hunger.com - All Right Reserved.</p>
   </div> 
  )
}

export default Footer
