import Topbar from '@/components/shared/Topbar'
import React from 'react'

const AIIMS = () => {
    return (
        <div className='w-full'>
            <div className='' style={{ marginTop: '1rem', marginLeft: '4rem', marginRight: '4rem', marginBottom: '1rem'}}>
              <Topbar />
            </div>
            <div className='relative w-full flex justify-center h-5'>
                <img src="/assets/images/hospitals/aiims.png" className='w-full blur-md absolute object-cover'></img>
                <p className= 'text-9xl text-white absolute items-center top-48'>AIIMS Delhi</p>
            </div>
        </div>
  )
}

export default AIIMS