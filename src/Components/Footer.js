import React from 'react'
import "./Styles/Footer.css"
import { FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function () {
  return (
    <footer>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>(not real)example@comix-craze.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
          <p>&copy; 2021 Comix Craze. (Not actually real) All rights reserved</p>
          <div className='SocialIcons'>
          <motion.li whileHover={{scale:1.2, y:-6}}>
            <a href='https://twitter.com'
            target='_blank' 
            rel='noopener noreferrer' 
            
            className='Twit'>
                <FaTwitter />
            </a>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, y:-6}}>
            <a href='https://facebook.com'
            target='_blank' 
            rel='noopener noreferrer' 
            className='Face'>
                <FaFacebook />
            </a>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, y:-6}}>
            <a href='https://youtube.com'
            target='_blank' 
            rel='noopener noreferrer' 
            className='Tube'>
                <FaYoutube />
            </a>
        </motion.li>
          </div>
    </footer>
  )
}
