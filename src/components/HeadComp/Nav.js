import React from 'react'

function Nav() {
  return (
    <div className='nav-bar'>

      <h1 className='n-title'> 
        Otis Jackson IV 
      </h1>
      
      <div className='n-nav'>
        <div className='n-item'>
              <p>About Me</p>
          </div>
          <div className='n-item'>
            <p>Projects/Experience</p>
          </div>
          <div className='n-item'>
            <p>Contacts</p>
          </div>
          <div className='n-item'>
            <p>Extras</p>
          </div>
      </div>

    </div>
  )
}

export default Nav