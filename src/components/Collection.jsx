import React from 'react'
import glass1 from './images/trendeyeglass1.png'
import glass2 from './images/trendeyeglass2.png'
import glass3 from './images/trendeyeglass3.png'

const Collection = () => {
  return (
    <>
      <div className='collection image-grid'>
        <div>
            <img src={glass1} alt="" />
        </div> 
        <div>   
            <img src={glass2} alt="" />
        </div>
        <div>
            <img src={glass3} alt="" />
        </div>
      </div>
    </>
  )
}

export default Collection
