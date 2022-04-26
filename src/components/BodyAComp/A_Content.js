import React, {useState} from 'react';
import img1 from '../../media/WebpageLogo_edited.png'
import img2 from '../../media/Photo1(ciricle).png'
import img3 from '../../media/Photo2(edited)Icon.png'
import {BiChevronsRight} from 'react-icons/bi';
import pinfo from '../dataA';



function A_Content() {
  // Attributes
  let imgList = [
    {
      photo: img2
    },
    {
      photo: img3
    }
  ];

  const[object, setObject] = useState(0);
  const{title, text} = pinfo[object];

  // Methods
  const checkNum = (num)=> {
    if(num > pinfo.length - 1){
      num = 0;
    }
    return num;
  }
  const moveForward = ()=>{
    setObject((index) =>{
      let newIndex = index + 1;
      return checkNum(newIndex);
    })
  }

  // Outputted HTML
  return (
    <div className='a-container'>
      
      <div className='aa-container'>

        {/* Box Title */}
        <div className='aa-title-box'> 
          <h2 className='aa-title'><i>Who is Otis IV ??</i></h2>
        </div>

        {/* Box Content Container */}
        <div className='aa-content-box'>
          
          <div className='aa-content-1'>
            {/* title */}
            <div id='aa-title-box'>
              <h2>{title}</h2>
            </div>

            {/* description */}
            <div id='aa-descript-box'>
              <p>{text}</p>
            </div>

            {/* img */}
            <div id='aa-img-box'></div>

            {/* button */}
            <div>
              <button id='aa-btn' onClick={moveForward}>
                <p id='btn-text'>Continue</p>
                <BiChevronsRight id='aa-btn-logo'/>
              </button>
            </div>

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