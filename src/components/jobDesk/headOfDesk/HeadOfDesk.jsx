import React from 'react'
import './HeadOfDesk.css'

function HeadOfDesk() {
  return (
    <div  className='headofDesk'>
          <div className="headOfDesk-wrapper">
              <div className="topHead">
                  <p className='p1'>Job Desk</p>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4.5L10 8.5L6 12.5" stroke="#B5B5C0" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                   <p className='p'>Attendance</p>
              </div>
              <div className="bottomHead">
                  <div className="job1">
                      Job Desk
                  </div>
                  <button className='jobBtn'>
                     <svg width="20" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4 8.50009H12M8 4.5V12.5" stroke="#F5F5F5" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                      Action
                  </button>
              </div>
       </div>
    </div>
  )
}

export default HeadOfDesk
