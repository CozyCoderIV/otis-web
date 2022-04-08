import React from 'react'
import img1 from '../../media/Otis_anima(2 complete)_editedXXX.png'

function B_Content() {
  return (
    <div className='b-container'>

      <div className='bb-container'>

        <div className='bb-title-box'>
          <h2 className='bb-title'><i>Projects && EXP X))</i></h2>
        </div>

        <div className='bb-content-box'>

          <div className='bb-content-1'>

            <div className='bb-content-1-title-box'>
              <h4 className='bb-content-1-title'>Otis R. Jackson IV</h4>
            </div>

            <div className='bb-content-box-img'>
              <div className='bb-img-container'>
                <img src={`${img1}`} alt='image' className="bb-img"/>
              </div>
            </div>

          </div>
         
          {/* List of Projects */}
          <div className='bb-content-2'>
              <ol className='bb-list'>
                <li className='bb-list-itemA'>
                  <div className='bb-Acon'>
                    <h3 className='project-title'> Galaga VII</h3>
                    <div className='b-description'>Start Date: March 1st 2021</div>
                    <div className='b-description'>End Date: December 27th 2021</div>
                    <div className='b-description'>Language: Java</div>
                  </div>
                </li>
                <li className='bb-list-itemB'>
                  <div className='bb-Bcon'>
                    <h3 className='project-title'>Death_Pong</h3>
                    <div className='b-description'>Start Date: January 18th 2022</div>
                    <div className='b-description'>End Date: February 2nd 2022</div>
                    <div className='b-description'>Language: C#</div>
                  </div>
                </li>
                <li className='bb-list-itemC'>
                  <div className='bb-Ccon'>
                    <h3 className='project-title'>WebPage (You Are Here)</h3>
                    <div className='b-description'>Start Date: April 1st 2022</div>
                    <div className='b-description'>End Date: NDA</div>
                    <div className='b-description'>Language: REACT.js</div>
                  </div>
                </li>
              </ol>
          </div>

          {/*  */}
          <div className='bb-content-3'>

          </div>
        </div>

      </div>

    </div>
  )
}

export default B_Content