import React from 'react'
import HeadOfDesk from './headOfDesk/HeadOfDesk'
import InfoLeft from './infoleft/InfoLeft'
import InfoRight from './inforight/InfoRight'
import './jobDesk.css'

function JobDesk() {
  return (
      <div className='main-headOfDesk-Container'>    
          <HeadOfDesk />
          <div className="headofdeskflex">
              <InfoLeft />
              <InfoRight/>
          </div>
    </div>
  )
}

export default JobDesk
