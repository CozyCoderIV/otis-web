import React from 'react'
import img1 from '../../media/WebpageLogo_edited.png'
import img2 from '../../media/Photo1(ciricle).png'

function A_Content() {
  return (
    <div className='a-container'>
      
      <div className='aa-container'>

        <div className='aa-title-box'> 
          <h2 className='aa-title'><i>Who is Otis IV ??</i></h2>
        </div>


        <div className='aa-content-box'>
          
          <div className='aa-content-1'>
            <ol className='aa-list'>
              <li>
                <div className='aa-list-item' id = "title">
                  <h3>Origin Story</h3>
                </div>
              </li>
            </ol>
              {/* <li>
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
              </li> */}
          </div>

          <div className='aa-content-2'>
            <div className="imgA-box">
              <img src={`${img1}`} alt='image' className="imgA" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default A_Content