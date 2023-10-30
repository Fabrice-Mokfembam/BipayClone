import React from 'react'
import './Dialogue.css'
import thiago from '../../../assets/images/remix1.jpg'

function Dialogue() {

const arrayOftable = ['Allowance', 'Attendance', 'Leave', 'Folder', 'Assets', 'History', 'Salary'];
    

  return (
      <div className='main-dialogue-contaner'>
             <div className='div1-mainAttendance'>
              <div className="firstAttend">
                    <div className="an">
                      <div className="items">
                          Apply Between
                      </div>
                      <div className="items">
                          Department
                      </div>
                      <div className="items">
                          Work Shift
                      </div>
                      <div className="items">
                          Rejected
                      </div>
                      <div className="items">
                          Duration
                      </div>
                  </div>
                  <div className="searchComponent">
                      <svg className='svvg'width="16.8" height="16.8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2576 10.2576L14 14M11.6364 6.31818C11.6364 9.25533 9.25533 11.6364 6.31818 11.6364C3.38103 11.6364 1 9.25533 1 6.31818C1 3.38103 3.38103 1 6.31818 1C9.25533 1 11.6364 3.38103 11.6364 6.31818Z" stroke="#404040" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                       <input type="text" placeholder='search'/>
                  </div>
              </div>
              <div className="ThirdAttend">
                  <div className="ltable">
                      {
                          arrayOftable.map(item => {
                              return (
                                  <>
                                      <div className="ltableItem">
                                          {item}
                                  </div>
                                  
                                  </>
                              )
                          })
                      }
                  </div>
                  <div className="listTable lvp">
                      <div className="imggge">
                          <div className="imgCon"> <img className='immh' src={thiago} alt="img" /> </div>
                          <div className="imgname">Thiago Fabrice</div>
                    </div> 
                        <div className='lop lk'>allowance</div>
                        <div className='lop lko'>leave</div>
                        <div className='lop'>allow</div>
                        <div className='lop'>09/09//9</div>
                        <div className='lop'>allong</div>
                        <div className='lop'>lowest</div>
                      
                  </div>
                  <div className="listTable lvp">
                      <div className="imggge">
                          <div className="imgCon"> <img className='immh' src={thiago} alt="img" /> </div>
                          <div className="imgname">Thiago Fabrice</div>
                    </div> 
                        <div className='lop lk'>allowance</div>
                        <div className='lop lko'>leave</div>
                        <div className='lop'>allow</div>
                        <div className='lop'>09/09//9</div>
                        <div className='lop'>allong</div>
                        <div className='lop'>lowest</div>
                      
                  </div>
                  <div className="listTable lvp">
                      <div className="imggge">
                          <div className="imgCon"> <img className='immh' src={thiago} alt="img" /> </div>
                          <div className="imgname">Thiago Fabrice</div>
                    </div> 
                        <div className='lop lk'>allowance</div>
                        <div className='lop lko'>leave</div>
                        <div className='lop'>allow</div>
                        <div className='lop'>09/09//9</div>
                        <div className='lop'>allong</div>
                        <div className='lop'>lowest</div>
                      
                  </div>
                  <div className="listTable lvp">
                      <div className="imggge">
                          <div className="imgCon"> <img className='immh' src={thiago} alt="img" /> </div>
                          <div className="imgname">Thiago Fabrice</div>
                    </div> 
                        <div className='lop lk'>allowance</div>
                        <div className='lop lko'>leave</div>
                        <div className='lop'>allow</div>
                        <div className='lop'>09/09//9</div>
                        <div className='lop'>allong</div>
                        <div className='lop'>lowest</div>
                      
                  </div>
                  <div className="listTable lvp">
                      <div className="imggge">
                          <div className="imgCon"> <img className='immh' src={thiago} alt="img" /> </div>
                          <div className="imgname">Thiago Fabrice</div>
                    </div> 
                        <div className='lop lk'>allowance</div>
                        <div className='lop lko'>leave</div>
                        <div className='lop'>allow</div>
                        <div className='lop'>09/09//9</div>
                        <div className='lop'>allong</div>
                        <div className='lop'>lowest</div>
                      
                  </div>
                  </div>
        <div className="fifth ju dial">
          <div className="pagesNav">
            <button className='pagesvg'>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4L5 8L9 12" stroke="#616161" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
           </button>
            <button className='prev'>Prev</button>
            <button className='next'>Next</button>

          </div>
          <div className="pagesNum">
            <span>page: <input type="number" /></span>
            of <span>100</span>
            <span><input type="number" /></span>
                  </div>
          <svg className='svgm' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6 4.5L10 8.5L6 12.5" stroke="#B5B5C0" stroke-width="1.20741" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
        
        </div>
          </div>
          
    </div>
  )
}

export default Dialogue
