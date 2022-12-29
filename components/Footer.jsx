import React from 'react'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 SOPG BAKALE<br/>Sva prava pridržana.</p>
      <p className='icons'>
        <a href="https://www.instagram.com/sopg.bakale/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100064179074932" target="_blank"><AiFillFacebook/></a>
        
      </p>
    </div>
  )
}

export default Footer