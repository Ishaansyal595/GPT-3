import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/GPT-3.png'
import './navbar.css'

const Menu=()=>(
<>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatgpt3">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
</>
)

export const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu/>
        </div>
      </div>
    <div className="gpt3__navbar-sign">
      <p>sign in</p>
      <button type="button">Sign up</button>
    </div>
    <div className="gpt3__navbar-menu">
      {toggleMenu
          ?<RiCloseLine style={{ color: '#fff' }}  size={27} onClick={()=>setToggleMenu(false)} />
          :<RiMenu3Line style={{ color: '#fff' }}  size={27} onClick={()=>setToggleMenu(true)} />
      }
      {toggleMenu &&(
        <div className='gpt3__navbar-menu-container scale-up-center'>
          <div className='gpt3__navbar-menu-container-links'>
          <Menu/>
          <div className="gpt3__navbar-menu-container-links-sign">
            <p>sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}
