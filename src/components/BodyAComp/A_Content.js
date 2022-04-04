import React from 'react'

function A_Content() {
  return (
    <div className='a-container'>
      
      <div className='aa-container'>

        <div className='aa-title-box'> 
          <h2 className='aa-title'><i>Who is Otis IV ??</i></h2>
        </div>

        {/* <div className='icon-box'>
          <img className='icon' src='media/WebpageLogo_edited.png' alt=''></img>
        </div> */}

        <div className='aa-content-box'>
          
          <div className='aa-content-1'>
            <ol className='aa-list'>
              <li>
                <div className='aa-list-item'>
                  <h3>Origin Story</h3>
                </div>
              </li>
              <li>
                <div className='aa-list-item'>
                  <h3>Educational Background</h3>
                </div>
              </li>
              <li>
                <div className='aa-list-item'>
                  <h3>Hobbies / Interests</h3>
                </div>
              </li>
              <li>
                <div className='aa-list-item'>
                  <h3>Current Milestones</h3>
                </div>
              </li>
            </ol>
          </div>

          <div className='aa-content-2'>
            <div className='aa-img-container'></div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default A_Content