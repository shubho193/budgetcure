import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <header className='w-full flex text-center justify-between' style = {{ marginTop:'1rem' }}>
        <div className="flex" style={{ listStyle: 'none' }}>
          <h2 className="flex items-center transform transition duration-200 hover:scale-110" style = {{ marginBottom:'5px' }}>
            <a href='/'>
            <img src='/assets/icons/bg-light.png' alt='logo' className='h-9 w-9 object-cover'/>
            </a>
            <Link to="/" className="text-black hover:text-primary-500 text-2xl" style={{ marginLeft: '1vw'}}><b>BudgetCure</b></Link>
          </h2>
          <h2 className="flex items-center">
            <Link to="/hospitals" className="text-black hover:text-primary-500 transform transition duration-200 hover:scale-110" style={{ marginLeft: '4vw'}}>Hospitals</Link>
            <Link to="/specialities" className="text-black hover:text-primary-500 transform transition duration-200 hover:scale-110" style={{ marginLeft: '3vw'}}>Specialities</Link>
          </h2>
        </div>
        <div className="flex" style={{ listStyle: 'none' }}>
        <h2 className="flex items-center">
          <a href='/profile'>
          <img src='/assets/images/profile2.png' alt='logo' className='h-8 w-8 object-cover'/>
          </a>
        </h2>
        </div>
    </header>
  )
}

export default Topbar