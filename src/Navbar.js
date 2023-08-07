import React, { useEffect, useRef, useState } from 'react'
import {FaBars,FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'
import {links,social} from './data'

function Navbar() {
    const[showLinks,setShowlinks]=useState(false)
    const linksRefContainer =useRef(null)
    const linksRef=useRef(null)
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksRefContainer.current.style.height=`${linksHeight}px`
        }else{
            linksRefContainer.current.style.height=`0px`
        }
    },[showLinks])
  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <h1>Coding addict</h1>
                <button className='nav-toggle' onClick={()=>setShowlinks(!showLinks)}>
                    <FaBars/>
                </button>
                
            </div>
        
                <div className="links-container" ref={linksRefContainer}>
                <ul className='links'ref={linksRef}>
                {links.map((link)=>{
                  const {id,url,text} =link
                  return(
                      <li key={id}>
                          <a href={url}>{text}</a>
                      </li>
                  )
                })}
  
                </ul>
                  
              </div>
            
            
            <ul className='social-icons'>
                {social.map((icons)=>{
                    const {id,url,icon}=icons
                    return(
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>

    </nav>
  )
}

export default Navbar