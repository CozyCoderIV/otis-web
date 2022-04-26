import React, {useState} from 'react'
import ReactPlayer from 'react-player'; 
import img1 from '../../media/Otis_anima(2 complete)_editedXXX.png'
import galaga from '../../media/GalagaIco copy.png'
import dp from '../../media/Death_Pong(Instruct_LR).png'
import rd from '../../media/Rock Dodger(Icon).png'

import {BiChevronsRight} from 'react-icons/bi';
import {DiReact} from 'react-icons/di';

import dataB from '../dataB';


function B_Content() {
  // Attributes
  let icoList = [
    {
      imgA: galaga
    },
    {
      imgA: dp
    },
    {
      imgA: rd
    },
    {
      imgA: DiReact
    }
  ];
  // icoList.push(galaga);
  // icoList.push(dp);

  const[proj, setProj] = useState(0);
  const[ico, setIco] = useState(0);

  const{project, language, Sdate, Edate, clip, icon, description} = dataB[proj];
  const{imgA} = icoList[ico];




  // Methods
  const checkNum = (number)=>{ 
    if(number > dataB.length-1){
      number = 0;
    }
    return number;
  }
  const checkIco = (number)=>{
  }

  const moveForward = ()=> {
    setProj((index)=>{
      let newIndex = index + 1;
      return checkNum(newIndex);
    })
    setIco((index) => {
      let newNum = index + 1;
      if(newNum > icoList.length-1){
        newNum = 0;
      }
      return newNum;
    })
  }
  //  console.log(proj);


  // Output HTML
  return (
    <div className='b-container'>

      <div className='bb-container'>

        <div className='bb-title-box'>
          <h2 className='bb-title'><i>Projects && EXP X))</i></h2>
        </div>

        {/* Content Box container */}
        <div className='bb-content-box'>

          {/* Img Box */}
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
         
          {/* Project Container */}
          <div className='bb-content-2'>

            {/* Project Title Box */}
            <div id='project-box'><h2>{project}</h2></div>

            {/* time box */}
            <div className='time-box'><h2>Began: {Sdate}</h2></div>
            <div className='time-box' id ='tb'><h2>Finished: {Edate}</h2></div>

            {/* icon box */}
            <div id='icon-box'>
              <img src={`${imgA}`} className='icon-img'/>
            </div>

            {/* descript box */}
            <div id='descript-box'><p id='b-text'>{description}</p></div>

            {/* video box */}
            <div id='video-box'>
              <ReactPlayer controls width='440px' height='280px' url={clip}/>
            </div>

            {/* button */}
            <button id='bb-btn' onClick={moveForward}>
                <p id='btn-text'>Continue</p>
               <BiChevronsRight id='bb-btn-logo'/>
            </button>
          </div>

          {/* Stat Content Box */}
          <div className='bb-content-3'>

            {/* Attribute points */}
            <div id='attribute-box'>
              <div id='attribute-c1'>c1
                <div className='attribute-gA'>1</div>
                <div className='attribute-gA'>2</div>
                <div className='attribute-gA'>3</div>
                <div className='attribute-gA'>4</div>
              </div>
              <div id='attribute-c2'>c2
                <div className='attribute-gB'>1</div>
                <div className='attribute-gB'>2</div>
                <div className='attribute-gB'>3</div>
                <div className='attribute-gB'>4</div>
              </div>
            </div>

            {/* Attribute Chart */}
            <div id='chart-box'>
              Attribute Charts
              <img id='chart'/>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default B_Content