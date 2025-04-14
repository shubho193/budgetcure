import React from 'react'
import Topbar from '@/components/shared/Topbar'
import { ArrowLeft, Heart, IndianRupee, MapPin, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Search = () => {
  return (
    <div className='w-full'>
    <div className='' style={{ marginTop: '1rem', marginLeft: '4rem', marginRight: '4rem', marginBottom: '1rem'}}>
      <Topbar />
    </div>
    
    <div className='h-full flex'>
      <div className='flex w-3/12 h-full bg-[#F0F0F0] relative'>
        <div className='mt-4 ml-4 mr-6 w-full'>
          
          <div className=''>
            <Button size="icon">
              <ArrowLeft className="h-6 w-6"/>
            </Button>
          </div>
          
          <div className='mt-4 ml-2'>
            <p className='text-xl font-medium'>Search Critera</p>
            <p className='text-sm mt-6'>Location</p>
            <form>
              
            <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
              
              <MapPin stroke='#000000'  className="absolute ml-2"/>
              
              <input className="py-2 pl-11 w-full" id="location" type="text" placeholder="Enter your location"/>
            </div>

            <p className='text-sm mt-4'>Medical Need</p>

            <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
              
              <Stethoscope className="absolute ml-2"/>
              
              <input className="py-2 pl-11 w-full" id="category" type="text" placeholder="Enter medical category"/>
            </div>

            <p className='text-sm mt-4'>Budget</p>

            <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
              
              <IndianRupee className="absolute ml-2"/>
              
              <input className="py-2 pl-11 w-full" id="budget" type="text" placeholder="Enter your budget"/>
            </div>
            <button className='mt-8 w-full h-12 rounded-lg text-white bg-red transform transition duration-500 hover:scale-105'>
              Search
            </button>

          </form>
          <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <p className='text-xl font-nedium mt-4 mb-4'>Filter</p>
          

          <div className="flex items-center mb-4">
              <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Within Nearby Area</label>
          </div>
          
          <div className="flex items-center mb-4">
              <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Within Budget</label>
          </div>
          
          <div className="flex items-center mb-4">
              <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Only Specified Categories</label>
          </div>

          <p className='text-xl font-nedium mt-6 mb-4'>Rating</p>
          <div className="flex items-center mb-3">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">4★ and above</label>
          </div>

          <div className="flex items-center mb-3">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">3★ and above</label>
          </div>

          <div className="flex items-center mb-3">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">2★ and above</label>
          </div>

          <div className="flex items-center mb-3">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">1★ and above</label>
          </div>

          
          <div className="flex items-center mb-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Unrated</label>
          </div>

          </div>
        </div>
      </div> 

      <div className='w-9/12 pl-8 pt-4 pr-8'>
        <p className='text-xl font-normal mb-4'>Showing results for the search criteria.</p>
          
          <div className='h-72 w-full bg-[#F0F0F0] rounded-3xl flex'>
            <img src="/assets/images/hospitals/hospitals1.jpg" alt="card" className='object-cover h-[16rem] w-[16rem] top-3 rounded-3xl mt-4 ml-4 mr-4'/>
            <div className='w-7/12'>
              <p className='mt-4 text-4xl font-normal'>All India Institute of Medical Sciences (AIIMS), Delhi</p>
              <p className='mt-4'>4.6 km from your location</p>
              <p className='mt-2 '>Currently <b>Open</b> | Offers Emergency Services</p>
              <p className='mt-12'>Specialities :</p>
              <div className='flex'>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Cardiology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Oncology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Neurology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Multi-speciality</p>
                </div>

              </div>
            </div>
            <div className='w-3/12 justify-end'>
              <div className='h-1/2 w-full flex justify-end'>
                <div className='flex mr-4 mt-4 items-center h-12 justify-end'>
                  <p className='mr-2 font-medium text-xl'>Rating</p>
                  <div className='h-12 w-24 bg-blue-600 rounded-full items-center flex justify-center'>
                    <p className='text-white font-bold text-2xl'>4.9 ★</p>
                  </div>
                </div>
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                <p className='mr-4 text-xl'>Consultancy Fee :</p>
                <p className='mr-4 text-4xl font-bold'>₹ 500</p>

                
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                
                <div className='flex'>
                  <a href='https://www.aiims.edu/index.php?lang=en'>
                  <div className='w-[22rem] h-12 mr-4 mb-4 bg-red rounded-2xl flex items-center justify-center transform transition duration-500 hover:scale-105'>
                    <p className='text-white text-lg'>See details</p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className='h-72 w-full mt-4 bg-[#F0F0F0] rounded-3xl flex'>
            <img src="/assets/images/hospitals/hospitals2.jpg" alt="card" className='object-cover h-[16rem] w-[16rem] top-3 rounded-3xl mt-4 ml-4 mr-4'/>
            <div className='w-7/12'>
              <p className='mt-4 text-4xl font-normal'>Apollo Hospital</p>
              <p className='mt-4'>2.4 km from your location</p>
              <p className='mt-2 '>Currently <b>Open</b> | Offers Emergency Services</p>
              <p className='mt-12'>Specialities :</p>
              <div className='flex'>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Cardiology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Orthopedics</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Oncology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Multi-speciality</p>
                </div>

              </div>
            </div>
            <div className='w-3/12 justify-end'>
              <div className='h-1/2 w-full flex justify-end'>
                <div className='flex mr-4 mt-4 items-center h-12 justify-end'>
                  <p className='mr-2 font-medium text-xl'>Rating</p>
                  <div className='h-12 w-24 bg-blue-600 rounded-full items-center flex justify-center'>
                    <p className='text-white font-bold text-2xl'>4.7 ★</p>
                  </div>
                </div>
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                <p className='mr-4 text-xl'>Consultancy Fee :</p>
                <p className='mr-4 text-4xl font-bold'>₹ 1000</p>

                
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                
                <div className='flex'>
                  <a href='https://www.apollohospitals.com/noida/'>
                  <div className='w-[22rem] h-12 mr-4 mb-4 bg-red rounded-2xl flex items-center justify-center transform transition duration-500 hover:scale-105'>
                    <p className='text-white text-lg'>See details</p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='h-72 w-full mt-4 bg-[#F0F0F0] rounded-3xl flex'>
            <img src="/assets/images/hospitals/hospitals3.jpg" alt="card" className='object-cover h-[16rem] w-[16rem] top-3 rounded-3xl mt-4 ml-4 mr-4'/>
            <div className='w-7/12'>
              <p className='mt-4 text-4xl font-normal'>Fortis Hospital</p>
              <p className='mt-4'>6.9 km from your location</p>
              <p className='mt-2 '>Only <b>Open</b> for Immediate Assistance | Offers Emergency Services</p>
              <p className='mt-12'>Specialities :</p>
              <div className='flex'>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Cardiology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Neurology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Oncology</p>
                </div>
                <div className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2'>
                  <p>Multi-speciality</p>
                </div>

              </div>
            </div>
            <div className='w-3/12 justify-end'>
              <div className='h-1/2 w-full flex justify-end'>
                <div className='flex mr-4 mt-4 items-center h-12 justify-end'>
                  <p className='mr-2 font-medium text-xl'>Rating</p>
                  <div className='h-12 w-24 bg-blue-600 rounded-full items-center flex justify-center'>
                    <p className='text-white font-bold text-2xl'>4.8 ★</p>
                  </div>
                </div>
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                <p className='mr-4 text-xl'>Consultancy Fee :</p>
                <p className='mr-4 text-4xl font-bold'>₹ 800</p>

                
              </div>
              <div className='h-1/4 w-full flex items-end justify-end'>
                
                <div className='flex'>
                  <div className='w-[22rem] h-12 mr-4 mb-4 bg-red rounded-2xl flex items-center justify-center transform transition duration-500 hover:scale-105'>
                    <p className='text-white text-lg'>See details</p>
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

export default Search