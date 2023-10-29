import React from 'react'
import HeadOfDesk from '../jobDesk/headOfDesk/HeadOfDesk'
import './attendanceSummary.css'
import MainAttendance from './maindivAttendance/MainAttendance'

function AttendanceSummary() {
  return (
    <>
      <div className='main-headOfDesk-Container'>
        <div  className='headofDesk'>
          <div className="headOfDesk-wrapper">
              <div className="topHead">
                  <p className='p1'>Job Desk</p>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4.5L10 8.5L6 12.5" stroke="#B5B5C0" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                   <p className='p'>Summary</p>
              </div>
              <div className="bottomHead">
                  <div className="job1">
                      Job Desk
              </div>
              <div className="btns">
                  <button className='jobBtn btnOne'>
                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.06C1 5.16392 1 4.71587 1.17175 4.37362C1.32282 4.07256 1.56388 3.82779 1.86038 3.67439C2.19745 3.5 2.63871 3.5 3.52121 3.5H4.00186C4.50745 3.5 4.76024 3.5 4.96719 3.55837C5.49971 3.70856 5.91581 4.13106 6.06373 4.67178C6.12121 4.88191 6.12121 5.13859 6.12121 5.65195V5.76304C6.12121 6.42981 6.12121 6.7632 6.09897 7.09188C6.02829 8.13631 5.78983 9.16198 5.39304 10.1283C5.26817 10.4323 5.12134 10.7305 4.82767 11.3269C4.76542 11.4533 4.73429 11.5165 4.69631 11.5697C4.57458 11.7401 4.39159 11.8549 4.18702 11.8893C4.1232 11.9 4.05361 11.9 3.91441 11.9H2.37879L3.95455 8.7H3.52121C2.63871 8.7 2.19745 8.7 1.86038 8.52561C1.56388 8.37221 1.32282 8.12744 1.17175 7.82638C1 7.48413 1 7.03608 1 6.14V6.06Z" stroke="#F5F5F5" stroke-width="1.20741" stroke-linejoin="round"/>
                          <path d="M8.87879 7.66C8.87879 6.76392 8.87879 6.31587 9.05054 5.97362C9.20161 5.67256 9.44267 5.42779 9.73917 5.27439C10.0762 5.1 10.5175 5.1 11.4 5.1H11.8807C12.3862 5.1 12.639 5.1 12.846 5.15837C13.3785 5.30856 13.7946 5.73107 13.9425 6.27178C14 6.48191 14 6.73859 14 7.25195V7.36304C14 8.02981 14 8.3632 13.9778 8.69188C13.9071 9.73631 13.6686 10.762 13.2718 11.7283C13.147 12.0323 13.0001 12.3305 12.7065 12.9269C12.6442 13.0533 12.6131 13.1165 12.5751 13.1697C12.4534 13.3401 12.2704 13.4549 12.0658 13.4893C12.002 13.5 11.9324 13.5 11.7932 13.5H10.2576L11.8333 10.3H11.4C10.5175 10.3 10.0762 10.3 9.73917 10.1256C9.44267 9.97221 9.20161 9.72744 9.05054 9.42638C8.87879 9.08413 8.87879 8.63608 8.87879 7.74V7.66Z" stroke="#F5F5F5" stroke-width="1.20741" stroke-linejoin="round"/>
                       </svg> 
                      Req Attendance
                  </button>
                  <button className='jobBtn btntwo'>
                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_648_4322)">
                                  <path d="M7.5 1.5V9.77273M7.5 1.5L10.0606 3.86364M7.5 1.5L4.93939 3.86364M14 10.9545V12.9242C14 13.7945 13.2945 14.5 12.4242 14.5H2.57576C1.70549 14.5 1 13.7945 1 12.9242V10.9545" stroke="#0A0A0A" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_648_4322">
                               <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                             </clipPath>
                            </defs>
                            </svg>
                      Action
                </button>
                </div>
              </div>
       </div>
        </div>
        <div className="moud">
            <MainAttendance />
        </div>
        
        </div>
      </>
  )
}

export default AttendanceSummary
