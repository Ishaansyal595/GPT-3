import React from 'react'
import './header.css'
import group81 from "../../assets/Group 81.png"
import headerIllustration from "../../assets/Header Illustration.png"

export const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <div className="gradient__text">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>

        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="gpt3__header-content-input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content-people">
          <img src={group81} alt="group of people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>   
      <div className="gpt3__header-image">
        <img src={headerIllustration} alt="Header Illustration" />
      </div>
    </div>
  )
}
