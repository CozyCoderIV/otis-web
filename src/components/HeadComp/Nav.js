import React from 'react'

function Nav() {
  return (
    <div className='nav-bar'>

      <h1 className='n-title'> 
        Otis Jackson IV 
      </h1>
      
      <div className='n-nav'>
        <div className='n-item'>
              <a>About Me</a>
          </div>
          <div className='n-item'>
            <a>Projects/Experience</a>
          </div>
          <div className='n-item'>
            <a>Contacts</a>
          </div>
          <div className='n-item'>
            <a>Extras</a>
          </div>
      </div>

    </div>
  )
}

export default Nav