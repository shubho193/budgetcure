import React from 'react'

const Bottombar = () => {
  return (
    
    <div className='pb-10 flex'>
      <div className='w-1/2'>
        <div className='pt-16 text-black text-2xl'><b>BudgetCure</b></div>
        <div className='pt-4 text-black'>BudgetCure ©</div>
        <div className='text-black'>2024</div>
      </div>
      <div className='w-1/2'>
        <ul className='pt-6 text-black'>
          <li className='float-right' style={{ clear: 'right'}}>Help</li>
          <li className='float-right pt-2' style={{ clear: 'right'}}>FAQ</li>
          <li className='float-right pt-2' style={{ clear: 'right'}}>Privacy Policy</li>
          <li className='float-right pt-2' style={{ clear: 'right'}}>Contact us</li>
        </ul>
      </div>

    </div>
  )
}

export default Bottombar