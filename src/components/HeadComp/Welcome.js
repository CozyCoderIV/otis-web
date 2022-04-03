import React from 'react'
import W_Para from './W_Para'

function Welcome() {
  return (
    <div className = 'welcome-container'>
        
        <div className='welcome-banner'> 
          <div className='w-box'>
            <h2 className='w-prompt'><i>Welcome To My HomePage :3!!</i></h2>
          </div>
        </div>

        <W_Para />
    </div>
  )
}

export default Welcome