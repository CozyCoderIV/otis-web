import React from 'react'
import Nav from './HeadComp/Nav'
import Welcome from './HeadComp/Welcome'

function Header() {
  return (
    <div className ='Header'> 
        <Nav />
        <Welcome />
    </div>
  )
}

export default Header