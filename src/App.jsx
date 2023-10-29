import 'typeface-inter';
import { useState,useRef } from 'react'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import JobDesk from './components/jobDesk/JobDesk'
import AttendanceDailyLog from './components/attendanceDailyLog/attendanceDailyLog'
import AttendanceSummary from './components/attendanceSummary/attendanceSummary'
import { Route, Routes } from 'react-router-dom'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sidebarRef = useRef(null);
    const hamRef = useRef(null);
    const xRef = useRef(null);


  function showSidebar() {
    hamRef.current.classList.toggle('hidden');
    xRef.current.classList.toggle('visible');
    sidebarRef.current.classList.toggle('visible')
  }

  

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={ 
            <>
              <Header hamRef={hamRef} xRef={xRef} showSidebar={showSidebar}  />
              <div className='start-Page'>
                <Sidebar sidebarRef={sidebarRef} />
                <JobDesk/>
              </div>           
            </>
          } />
          <Route path='/attendance/dailylog' element={ 
            <>
               <Header hamRef={hamRef} xRef={xRef} showSidebar={showSidebar} />
              <div className='start-Page'>
                <Sidebar sidebarRef={sidebarRef} isVisible={ isVisible} />
                <AttendanceDailyLog/>
              </div>           
            </>
          } />
          <Route path='/attendance/summary' element={ 
            <>
               <Header  hamRef={hamRef} xRef={xRef} showSidebar={showSidebar} />
              <div className='start-Page'>
                <Sidebar sidebarRef={sidebarRef} isVisible={ isVisible} />
                <AttendanceSummary/>
              </div>           
            </>
          } />         

          </Routes>
        </div>
    </>
  )
}

export default App
