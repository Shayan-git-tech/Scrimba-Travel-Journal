import React from 'react'
export default function Header() {
  return (
    <header>
      
      <img src={`${process.env.PUBLIC_URL}/Images/globe.png`} alt="logo"/>
      <p>My Travel Journal.</p>
      
    </header>
  )
}
