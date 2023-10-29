import React from 'react'
import './infoleft.css'
import thiago from '../../../assets/images/remix1.jpg'

function InfoLeft() {
  return (
    <div className='main-infoleft-container'>
      <div className='main-infoleft-inner-container'>
        <div className="image-infoleft">
          <div className='img-infocontainer'>
            <img className='thiagoImg' src={thiago} alt="img" />
          </div>
          <div className="img-infoleft-writings">
            <div className="name-infoleft">
               Thiago Fabrice
            </div>
            <div className="job-infoleft">
              Software Developer
            </div>
          </div>
        </div>
        <div className="midlevel">
        <div className="middle-div">
          <div className="intro">
            info
          </div>
          <div className="admininfo">
            <div className="dev ">
               <svg className='dr' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="34" height="34" rx="3.88571" fill="#F5F5F5"/>
                         <g clip-path="url(#clip0_123_7898)">
                            <path d="M13.6379 10.7197H12.8103C11.6516 10.7197 11.0723 10.7197 10.6297 10.9344C10.2404 11.1232 9.92386 11.4245 9.7255 11.7952C9.5 12.2165 9.5 12.7681 9.5 13.8712V21.8485C9.5 22.9516 9.5 23.5032 9.7255 23.9245C9.92386 24.2951 10.2404 24.5965 10.6297 24.7853C11.0723 25 11.6516 25 12.8103 25H21.1897C22.3484 25 22.9277 25 23.3703 24.7853C23.7596 24.5965 24.0761 24.2951 24.2745 23.9245C24.5 23.5032 24.5 22.9516 24.5 21.8485V13.8712C24.5 12.7681 24.5 12.2165 24.2745 11.7952C24.0761 11.4245 23.7596 11.1232 23.3703 10.9344C22.9277 10.7197 22.3484 10.7197 21.1897 10.7197H20.3621M15.2931 12.6894H18.7069C19.2863 12.6894 19.5759 12.6894 19.7972 12.5821C19.9919 12.4876 20.1501 12.337 20.2493 12.1517C20.3621 11.941 20.3621 11.6652 20.3621 11.1136V10.3258C20.3621 9.77419 20.3621 9.49841 20.2493 9.28774C20.1501 9.10243 19.9919 8.95176 19.7972 8.85734C19.5759 8.75 19.2863 8.75 18.7069 8.75H15.2931C14.7137 8.75 14.4241 8.75 14.2028 8.85734C14.0081 8.95176 13.8499 9.10243 13.7507 9.28774C13.6379 9.49841 13.6379 9.77419 13.6379 10.3258V11.1136C13.6379 11.6652 13.6379 11.941 13.7507 12.1517C13.8499 12.337 14.0081 12.4876 14.2028 12.5821C14.4241 12.6894 14.7137 12.6894 15.2931 12.6894Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                            </g>
                          <defs>
                           <clipPath id="clip0_123_7898">
                             <rect width="20" height="20" fill="white" transform="translate(7 7.5)"/>
                             </clipPath>
                               </defs>
                            </svg>
          <div className="img-infoleft-writings new">
            <div className="name-infoleft indev">
               Admin & HRM
            </div>
            <div className="job-infoleft indev">
              Department
            </div>
           </div>              
            </div>
          </div>
          <div className="admininfo">
            <div className="dev ">
                <svg className='dr' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect y="0.5" width="34" height="34" rx="3.88571" fill="#F5F5F5"/>
                   <g clip-path="url(#clip0_123_7904)">
                   <path d="M19.0833 8.75H10.2197C9.13186 8.75 8.25 9.63186 8.25 10.7197V11.7045M8.25 11.7045V23.0303C8.25 24.1181 9.13186 25 10.2197 25H22.5303C23.6181 25 24.5 24.1181 24.5 23.0303V13.6742C24.5 12.5864 23.6181 11.7045 22.5303 11.7045H8.25ZM21.7917 18.3523C21.7917 19.0322 21.2405 19.5833 20.5606 19.5833C19.8807 19.5833 19.3295 19.0322 19.3295 18.3523C19.3295 17.6724 19.8807 17.1212 20.5606 17.1212C21.2405 17.1212 21.7917 17.6724 21.7917 18.3523Z" stroke="#404040" stroke-width="1.50926" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_123_7904">
                       <rect width="20" height="20" fill="white" transform="translate(7 7.5)"/>
                        </clipPath>
                        </defs>
               </svg>
          <div className="img-infoleft-writings new">
            <div className="name-infoleft indev g">
               $40,000
            </div>
            <div className="job-infoleft indev">
              Salary
            </div>
           </div>              
            </div>
          </div>
          <div className="admininfo">
            <div className="dev ">
                  <svg className='dr' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect y="0.5" width="34" height="34" rx="3.88571" fill="#F5F5F5"/>
                          <g clip-path="url(#clip0_123_7910)">
                           <path d="M16.1288 12.6894V17.1212H18.5909M24.5 16.875C24.5 21.3623 20.8623 25 16.375 25C11.8877 25 8.25 21.3623 8.25 16.875C8.25 12.3877 11.8877 8.75 16.375 8.75C20.8623 8.75 24.5 12.3877 24.5 16.875Z" stroke="#404040" stroke-width="1.50926" stroke-linecap="round" stroke-linejoin="round"/>
                             </g>
                                <defs>
                                   <clipPath id="clip0_123_7910">
                                     <rect width="20" height="20" fill="white" transform="translate(7 7.5)"/>
                                  </clipPath>
                             </defs>
                    </svg>
          <div className="img-infoleft-writings new">
            <div className="name-infoleft indev">
               Regular
            </div>
            <div className="job-infoleft indev">
              work shift
            </div>
           </div>              
            </div>
          </div>
          <div className="admininfo">
            <div className="dev">
               <svg className='dr' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="34" height="34" rx="3.88571" fill="#F5F5F5"/>
                         <g clip-path="url(#clip0_123_7898)">
                            <path d="M13.6379 10.7197H12.8103C11.6516 10.7197 11.0723 10.7197 10.6297 10.9344C10.2404 11.1232 9.92386 11.4245 9.7255 11.7952C9.5 12.2165 9.5 12.7681 9.5 13.8712V21.8485C9.5 22.9516 9.5 23.5032 9.7255 23.9245C9.92386 24.2951 10.2404 24.5965 10.6297 24.7853C11.0723 25 11.6516 25 12.8103 25H21.1897C22.3484 25 22.9277 25 23.3703 24.7853C23.7596 24.5965 24.0761 24.2951 24.2745 23.9245C24.5 23.5032 24.5 22.9516 24.5 21.8485V13.8712C24.5 12.7681 24.5 12.2165 24.2745 11.7952C24.0761 11.4245 23.7596 11.1232 23.3703 10.9344C22.9277 10.7197 22.3484 10.7197 21.1897 10.7197H20.3621M15.2931 12.6894H18.7069C19.2863 12.6894 19.5759 12.6894 19.7972 12.5821C19.9919 12.4876 20.1501 12.337 20.2493 12.1517C20.3621 11.941 20.3621 11.6652 20.3621 11.1136V10.3258C20.3621 9.77419 20.3621 9.49841 20.2493 9.28774C20.1501 9.10243 19.9919 8.95176 19.7972 8.85734C19.5759 8.75 19.2863 8.75 18.7069 8.75H15.2931C14.7137 8.75 14.4241 8.75 14.2028 8.85734C14.0081 8.95176 13.8499 9.10243 13.7507 9.28774C13.6379 9.49841 13.6379 9.77419 13.6379 10.3258V11.1136C13.6379 11.6652 13.6379 11.941 13.7507 12.1517C13.8499 12.337 14.0081 12.4876 14.2028 12.5821C14.4241 12.6894 14.7137 12.6894 15.2931 12.6894Z" stroke="#404040" stroke-width="1.50926" stroke-linejoin="round"/>
                            </g>
                          <defs>
                           <clipPath id="clip0_123_7898">
                             <rect width="20" height="20" fill="white" transform="translate(7 7.5)"/>
                             </clipPath>
                               </defs>
                            </svg>
          <div  className="img-infoleft-writings new">
            <div className="name-infoleft indev">
               12 February 2023
            </div>
            <div className="job-infoleft indev">
              joining date
            </div>
           </div>              
            </div>
          </div>
        </div>
        

        <div className="last-div ">
          <div className="intro">
            contact
          </div>
          <div className="admininfo">
            <div className=" devl dev devll">
               <svg className='dr' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M21 6.9V17.1C21 18.4255 19.9418 19.5 18.6364 19.5H3.86364C2.55824 19.5 1.5 18.4255 1.5 17.1V6.9M21 6.9C21 5.57452 19.9418 4.5 18.6364 4.5H3.86364C2.55824 4.5 1.5 5.57452 1.5 6.9M21 6.9L11.25 12.6L1.5 6.9" stroke="#9E9E9E" stroke-width="1.81111" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          <div className="img-infoleft-writings writtings2">
            <div className="name-infoleft indev lp">
               Email
            </div>
            <div className="job-infoleft indev l">
              fabrice@gmail.com
            </div>
           </div>              
            </div>
          </div>
          <div className="admininfo">
            <div className="devl dev devll">
               <svg className='dr' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 17.4545H12.3M6.9 21H17.1C18.4255 21 19.5 19.9418 19.5 18.6364V3.86364C19.5 2.55824 18.4255 1.5 17.1 1.5H6.9C5.57452 1.5 4.5 2.55824 4.5 3.86364V18.6364C4.5 19.9418 5.57452 21 6.9 21Z" stroke="#9E9E9E" stroke-width="1.81111" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          <div className="img-infoleft-writings writtings2">
            <div className="name-infoleft indev lp">
               Phone
            </div>
            <div className="job-infoleft indev l">
              +237678565357
            </div>
           </div>              
            </div>
          </div>
          <div className="admininfo">
            <div className="devl dev devll">
                 <svg className='dr' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.25C21 16.6348 16.6348 21 11.25 21M21 11.25C21 5.86522 16.6348 1.5 11.25 1.5M21 11.25H1.5M11.25 21C5.86522 21 1.5 16.6348 1.5 11.25M11.25 21C13.3713 21 15.0909 16.6348 15.0909 11.25C15.0909 5.86522 13.3713 1.5 11.25 1.5M11.25 21C9.12872 21 7.40909 16.6348 7.40909 11.25C7.40909 5.86522 9.12872 1.5 11.25 1.5M1.5 11.25C1.5 5.86522 5.86522 1.5 11.25 1.5" stroke="#9E9E9E" stroke-width="1.81111" stroke-linejoin="round"/>
               </svg>
          <div className="img-infoleft-writings writtings2">
            <div className="name-infoleft indev lp">
               website
            </div>
            <div className="job-infoleft indev l blue">
              https://fabrice@.com
            </div>
           </div>              
            </div>
          </div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default InfoLeft
