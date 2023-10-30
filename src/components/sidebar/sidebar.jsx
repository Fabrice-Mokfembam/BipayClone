import React from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Sidebar({sidebarRef}) {
    const [toggleAttendance, setToggleAttendance] = useState(false);

    const navigate = useNavigate();

    const navToJobDesk = () => {
        navigate('/');
    }
    const navToDailyLog = () => {
        navigate('/attendance/dailylog');
    }
    const navToSummary = () => {
        navigate('/attendance/summary');
    }
  
  return (
    <div  className='main-sidebar-container' ref={sidebarRef}  data-aos="fade-up">
          <div className="navigation dashboard">
             <div className="navigation-wrapper">
              <div className="icon">
                     <svg width="20" height="22" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g clip-path="url(#clip0_524_5216)">
                            <path d="M2.5 7.70853C2.5 7.06093 2.83437 6.45471 3.39435 6.08705L10 1.75L16.6057 6.08705C17.1656 6.45471 17.5 7.06093 17.5 7.70853V16.0303C17.5 17.1181 16.5737 18 15.431 18H4.56897C3.42631 18 2.5 17.1181 2.5 16.0303V7.70853Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                             <path d="M7.67241 12.5833C7.67241 12.0394 8.13557 11.5985 8.7069 11.5985H11.2931C11.8644 11.5985 12.3276 12.0394 12.3276 12.5833V18H7.67241V12.5833Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                              </g>
                             <defs>
                             <clipPath id="clip0_524_5216">
                             <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                             </clipPath>
                           </defs>
                    </svg>
              </div>
              <div className='text'>
                  Dashboard
              </div>
            </div>  
        </div>
          <div onClick={navToJobDesk} className="navigation dashboard">
              <div className="navigation-wrapper">
              <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5152 13.8521V16.3448C16.5152 16.9242 16.5152 17.2139 16.4078 17.4352C16.3134 17.6298 16.1627 17.7881 15.9774 17.8872C15.7667 18 15.491 18 14.9394 18H3.81061C3.25904 18 2.98326 18 2.77259 17.8872C2.58727 17.7881 2.43661 17.6298 2.34219 17.4352C2.23485 17.2139 2.23485 16.9242 2.23485 16.3448V13.8521M12.5758 6.10345V4.65517C12.5758 4.07581 12.5758 3.78613 12.4684 3.56484C12.374 3.37019 12.2233 3.21193 12.038 3.11275C11.8274 3 11.5516 3 11 3H7.75C7.19843 3 6.92265 3 6.71198 3.11275C6.52667 3.21193 6.37601 3.37019 6.28158 3.56484C6.17424 3.78613 6.17424 4.07581 6.17424 4.65517V6.10345M11.5909 12.3103V14.8966M7.15909 12.3103V14.8966M2.82576 13.8621H15.9242C16.4758 13.8621 16.7516 13.8621 16.9623 13.7493C17.1476 13.6501 17.2982 13.4919 17.3927 13.2972C17.5 13.0759 17.5 12.7863 17.5 12.2069V7.75862C17.5 7.17926 17.5 6.88957 17.3927 6.66829C17.2982 6.47364 17.1476 6.31538 16.9623 6.2162C16.7516 6.10345 16.4758 6.10345 15.9242 6.10345H2.82576C2.27419 6.10345 1.99841 6.10345 1.78774 6.2162C1.60243 6.31538 1.45176 6.47364 1.35734 6.66829C1.25 6.88957 1.25 7.17926 1.25 7.75862V12.2069C1.25 12.7863 1.25 13.0759 1.35734 13.2972C1.45176 13.4919 1.60243 13.6501 1.78774 13.7493C1.99841 13.8621 2.27419 13.8621 2.82576 13.8621Z" stroke="#404040" stroke-width="1.50926" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>

              </div>
              <div className='text'>
                  Job Desk
                </div>
              </div>
        </div>
          <div className="navigation dashboard">
              <div className="navigation-wrapper">
              <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 3.95076C10.25 5.71849 8.79493 7.15152 7 7.15152C5.20507 7.15152 3.75 5.71849 3.75 3.95076C3.75 2.18303 5.20507 0.75 7 0.75C8.79493 0.75 10.25 2.18303 10.25 3.95076Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                    <path d="M0.75 15.3996C0.75 12.748 2.93261 10.5985 5.625 10.5985H8.375C11.0674 10.5985 13.25 12.748 13.25 15.3996C13.25 16.2835 12.5225 17 11.625 17H2.375C1.47754 17 0.75 16.2835 0.75 15.3996Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                     </svg>
               </div>
              <div className='text'>
                  Employee
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.5L8 10.5L12 6.5" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </div>
          <div className="navigation dashboard">
              <div className="navigation-wrapper">
              <div className="icon">
                 <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_524_5233)">
                      <path d="M1.25 18L1.25 1.75M4.20455 9.875L17.5 9.875M4.20455 9.875L8.14394 14.0606M4.20455 9.875L8.14394 5.68939" stroke="#404040" stroke-width="1.50926" stroke-linecap="round" stroke-linejoin="round"/>
                       </g>
                        <defs>
                          <clipPath id="clip0_524_5233">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                           </clipPath>
                        </defs>
                </svg>
               </div>
              <div className='text'>
                  Leave
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.5L8 10.5L12 6.5" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </div>
          <div onClick={() => {
              toggleAttendance? setToggleAttendance(false):setToggleAttendance(true)
          }} className="navigation attendance">
              <div className="navigation-wrapper">
              <div className="icon">
             <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_524_5240)">
                <path d="M9.12879 5.68939V10.1212H11.5909M17.5 9.875C17.5 14.3623 13.8623 18 9.375 18C4.88769 18 1.25 14.3623 1.25 9.875C1.25 5.38769 4.88769 1.75 9.375 1.75C13.8623 1.75 17.5 5.38769 17.5 9.875Z" stroke="#404040" stroke-width="1.50926" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
               <defs>
               <clipPath id="clip0_524_5240">
               <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
               </clipPath>
              </defs>
            </svg>
               </div>
              <div className='text'>
                  Attendance
                  </div>
                  
              </div>
              {
                  toggleAttendance ? <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4 10.5L8 6.5L12 10.5" stroke="#212143" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                   :  <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.5L8 10.5L12 6.5" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
     
          </div>
                   {
                  toggleAttendance && <div className="attendanceMenu">
                      <ul className='attendanceList'>
                          <li onClick={navToDailyLog}>Daily log</li>
                          <li>Request</li>
                          <li>Details</li>
                          <li onClick={navToSummary}>Summary</li>
                      </ul>
                  </div>
              }
          <div className="navigation dashboard">
              <div className="navigation-wrapper">
              <div className="icon">
              <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0985 6.10345L9.12879 3H3.2197C2.13186 3 1.25 3.92631 1.25 5.06897V6.10345M11.0985 6.10345H15.5303C16.6181 6.10345 17.5 7.02976 17.5 8.17241V15.931C17.5 17.0737 16.6181 18 15.5303 18H3.2197C2.13186 18 1.25 17.0737 1.25 15.931V6.10345M11.0985 6.10345H1.25" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
             </svg>

               </div>
              <div className='text'>
                  Administration
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.5L8 10.5L12 6.5" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </div>
          <div className="navigation dashboard">
              <div className="navigation-wrapper">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_524_5254)">
                     <path d="M11.3447 3.22727C11.3447 2.4114 10.6833 1.75 9.86742 1.75H8.88258C8.0667 1.75 7.4053 2.4114 7.4053 3.22727V3.93093C7.4053 4.36963 6.87489 4.58933 6.56468 4.27912L6.06714 3.78158C5.49023 3.20467 4.55487 3.20467 3.97796 3.78158L3.28157 4.47797C2.70465 5.05488 2.70465 5.99024 3.28157 6.56715L3.7791 7.06468C4.08931 7.37489 3.86961 7.9053 3.4309 7.9053L2.72727 7.9053C1.9114 7.9053 1.25 8.5667 1.25 9.38257L1.25 10.3674C1.25 11.1833 1.9114 11.8447 2.72727 11.8447H3.43087C3.86958 11.8447 4.08928 12.3751 3.77907 12.6853L3.28156 13.1828C2.70465 13.7597 2.70465 14.6951 3.28156 15.272L3.97795 15.9684C4.55486 16.5453 5.49022 16.5453 6.06713 15.9684L6.56468 15.4708C6.87489 15.1606 7.4053 15.3803 7.4053 15.819V16.5227C7.4053 17.3386 8.0667 18 8.88258 18H9.86742C10.6833 18 11.3447 17.3386 11.3447 16.5227V15.8191C11.3447 15.3804 11.8751 15.1607 12.1853 15.4709L12.6829 15.9685C13.2598 16.5454 14.1951 16.5454 14.7721 15.9685L15.4684 15.2721C16.0454 14.6952 16.0454 13.7598 15.4684 13.1829L14.9709 12.6853C14.6607 12.3751 14.8804 11.8447 15.3191 11.8447H16.0227C16.8386 11.8447 17.5 11.1833 17.5 10.3674V9.38258C17.5 8.5667 16.8386 7.9053 16.0227 7.9053L15.319 7.9053C14.8803 7.9053 14.6606 7.37489 14.9708 7.06468L15.4684 6.56709C16.0453 5.99018 16.0453 5.05482 15.4684 4.47791L14.772 3.78152C14.1951 3.20461 13.2598 3.20461 12.6829 3.78152L12.1853 4.27907C11.8751 4.58928 11.3447 4.36957 11.3447 3.93087V3.22727Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                       <path d="M12.0833 9.875C12.0833 11.3708 10.8708 12.5833 9.375 12.5833C7.87923 12.5833 6.66667 11.3708 6.66667 9.875C6.66667 8.37923 7.87923 7.16667 9.375 7.16667C10.8708 7.16667 12.0833 8.37923 12.0833 9.875Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                   </g>
                   <defs>
                   <clipPath id="clip0_524_5254">
                   <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                 </defs>
             </svg>
               </div>
              <div className='text'>
                  setting
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6.5L8 10.5L12 6.5" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </div>
    </div>
  )
}

export default Sidebar;
