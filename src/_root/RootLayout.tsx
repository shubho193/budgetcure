import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const [budget, setBudget] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  
  return (
    
    <div className='w-full' style={{ marginTop: '1rem', marginLeft: '4rem', marginRight: '4rem'}}>
      <Topbar />
      <div className='w-full relative' style={{ marginTop : '3rem', height: '27rem'}}>
        <img src="/assets/images/card2.jpg" alt="card" className='object-cover h-full w-full' style={{ borderRadius : '0.7rem' }}/>
        <div className='absolute bottom-0 w-full h-full  flex justify-center items-center'>
          <ul>
            <li className=' text-5xl text-white  text-center'>Find the Best Hospital for You
            </li>
            <li className=' text-xl text-white  text-center pt-3'>Discover the perfect hospital for your budget!
            </li>
          </ul>
          
        </div>
        <div className='absolute top-0 w-full flex justify-center items-end' style={{ height: '30rem'}}>
          <div className='border relative h-24 w-1/2 bg-[#F0F0F0] flex justify-center items-center'  style={{ borderRadius : '2rem'}}>
            
            <div className='text-right w-1/2'>
              <p className='pr-6 font-medium' >Location</p>
              <input className='mr-6 bg-transparent outline-none text-right' type="number" placeholder="Where are you located?" value={location} onChange={handleLocationChange} />   
            </div>

            <div className="via-neutral-500 to-transparent opacity-20 dark:opacity-100"> </div>

            <div className='text-left w-1/2'>
              <p className='pl-6 font-medium'>Budget</p>
              <p className='pl-6' style={{ fontSize: '12px'}}></p>       
              <input className='ml-6 bg-transparent outline-none' type="number" placeholder="What's your budget?" value={budget} onChange={handleBudgetChange} />      
            </div>
            
            <div className='bg-primary-500 rounded-md absolute right-4 transform transition duration-200 hover:scale-110'>
              <a href='/search'>
                <Button size="icon">
                  <ChevronRight className="h-6 w-6"/>
                </Button>
              </a>
            </div>
            
          </div>
        </div>
      </div>
      <div className='' style={{ paddingTop:'4rem'}}>
        <p className=' text-xl' style={{ paddingBottom:'1rem' }}>Categories</p>
        <div className='flex justify-between'>
          <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'25rem', width: '24%'}}>
            <a href='/hospital1'>
              <img src="/assets/images/Category/card.jpg" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                <p>Cardiology</p>
              </div>
            </a>
          </div>
          <div className='' style={{ height:'25rem', width: '24%'}}>
            <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'14rem'}}>
              <a href='/hospital2'>
                <img src="/assets/images/Category/onco.jpg" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
                <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                  <p>Oncology</p>
                </div>
              </a>
            </div>
            <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'11rem', paddingTop:'1rem'}}>
              <a href='/hospital3'>
                <img src="/assets/images/Category/pedia.jpg" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
                <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                  <p>Pediatrics</p>
                </div>
              </a>
            </div>
          </div>
          <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'25rem', width: '24%'}}>
            <a href='/hospital4'>
              <img src="/assets/images/Category/neuro.jpg" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                <p>Neurology</p>
              </div>
            </a>
          </div>
          <div className='' style={{ height:'25rem', width: '24%'}}>
          <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'11rem'}}>
              <a href='/hospital5'>
                <img src="/assets/images/Category/denti.jpg" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
                <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                  <p>Dentistry</p>
                </div>
              </a>
            </div>
            <div className='relative transform transition duration-500 hover:scale-110' style={{ height:'14rem', paddingTop:'1rem'}}>
              <a href='/hospital6'>
                <img src="/assets/images/Category/ortho.png" alt="card" className='object-cover h-full w-full' style={{borderRadius : '1rem'}}/>
                <div  className='flex absolute h-8 w-44 border bottom-3 left-4 bg-white rounded-xl items-center justify-center'>
                  <p>Orthopedics</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='' style={{ paddingTop:'4rem'}}>
        <p className=' text-xl' style={{ paddingBottom:'1rem' }}>Hospitals Near You</p>
        <div className='flex justify-between'>
          
          <div className='bg-[#F0F0F0] transform transition duration-500 hover:scale-110 relative' style={{ height:'20rem', width: '19%', borderRadius : '1rem'}}>
            <a href='/hospital1'className='flex justify-center'>
              <img src="/assets/images/hospitals/aiims.png" alt="card" className='absolute object-cover h-4/6 w-11/12 top-3' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute bottom-3 left-4 rounded-xl items-center text-xs'>
                <ul>
                <li className='text-lg'><b>AIIMS Delhi</b></li>
                <li>Cardiology, oncology, neurology, and more.</li>
                <li className=' text-sm'>Consultation fee : ₹500</li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-[#F0F0F0] transform transition duration-500 hover:scale-110 relative' style={{ height:'20rem', width: '19%', borderRadius : '1rem'}}>
            <a href='/hospital2'className='flex justify-center'>
              <img src="/assets/images/hospitals/apollo.jpg" alt="card" className='absolute object-cover h-4/6 w-11/12 top-3' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute bottom-3 left-4 rounded-xl items-center text-xs'>
                <ul>
                <li className='text-lg'><b>Apollo Hospital</b></li>
                <li>Cardiology, orthopedics, oncology, and more</li>
                <li className=' text-sm'>Consultation fee : ₹1000</li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-[#F0F0F0] transform transition duration-500 hover:scale-110 relative' style={{ height:'20rem', width: '19%', borderRadius : '1rem'}}>
            <a href='/hospital3'className='flex justify-center'>
              <img src="/assets/images/hospitals/fortis.jpg" alt="card" className='absolute object-cover h-4/6 w-11/12 top-3' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute bottom-3 left-4 rounded-xl items-center text-xs'>
                <ul>
                <li className='text-lg'><b>Fortis Hospital</b></li>
                <li>Cardiology, neurology, oncology, and more.</li>
                <li className=' text-sm'>Consultation fee : ₹800</li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-[#F0F0F0] transform transition duration-500 hover:scale-110 relative' style={{ height:'20rem', width: '19%', borderRadius : '1rem'}}>
            <a href='/hospital4'className='flex justify-center'>
              <img src="/assets/images/hospitals/max.jpg" alt="card" className='absolute object-cover h-4/6 w-11/12 top-3' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute bottom-3 left-4 rounded-xl items-center text-xs'>
                <ul>
                <li className='text-lg'><b>Max Super Speciality Hospital</b></li>
                <li>Cardiology, oncology, neurology, and more.</li>
                <li className=' text-sm'>Consultation fee : ₹800</li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-[#F0F0F0] transform transition duration-500 hover:scale-110 relative' style={{ height:'20rem', width: '19%', borderRadius : '1rem'}}>
            <a href='/hospital5'className='flex justify-center'>
              <img src="/assets/images/hospitals/sriganga.jpg" alt="card" className='absolute object-cover h-4/6 w-11/12 top-3' style={{borderRadius : '1rem'}}/>
              <div  className='flex absolute bottom-3 left-4 rounded-xl items-center text-xs'>
                <ul>
                <li className='text-lg'><b>Sir Ganga Ram Hospital</b></li>
                <li>Pediatric, cardiology, neurology, oncology, and more.</li>
                <li className=' text-sm'>Consultation fee : ₹1000</li>
                </ul>
              </div>
            </a>
          </div>

        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <Bottombar/>
    </div>
  )
}

export default RootLayout