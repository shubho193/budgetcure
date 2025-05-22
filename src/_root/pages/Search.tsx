import React, { useState, useEffect } from 'react'
import Topbar from '@/components/shared/Topbar'
import { ArrowLeft, Heart, IndianRupee, MapPin, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useHospitalSearch } from '@/components/shared/HospitalSearch'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useUserContext();
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [rating, setRating] = useState<number | undefined>();
  const [filters, setFilters] = useState({
    nearbyArea: true,
    withinBudget: true,
    specifiedCategories: true
  });
  const { searchHospitals, hospitals, loading, error } = useHospitalSearch();

  // Array of all hospital images
  const hospitalImages = [
    '/assets/images/hospitals/hospitals1.jpg',
    '/assets/images/hospitals/hospitals2.jpg',
    '/assets/images/hospitals/hospitals3.jpg',
    '/assets/images/hospitals/hospitals4.jpg',
    '/assets/images/hospitals/hospitals5.jpg',
    '/assets/images/hospitals/hospitals6.jpg',
    '/assets/images/hospitals/hospitals7.jpg',
    '/assets/images/hospitals/hospitals8.jpg',
    '/assets/images/hospitals/hospitals9.jpg',
    '/assets/images/hospitals/hospitals10.jpg',
    '/assets/images/hospitals/hospitals11.jpg',
  ];

  // Function to get a random hospital image
  const getRandomHospitalImage = () => {
    const randomIndex = Math.floor(Math.random() * hospitalImages.length);
    return hospitalImages[randomIndex];
  };

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleSearch = () => {
    searchHospitals({
      location: location || undefined,
      budget: budget ? parseInt(budget) : undefined,
      category: category || undefined,
      rating: rating,
      filters: filters
    });
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1);
  };

  // Reinitialize search when authentication state changes
  useEffect(() => {
    if (isAuthenticated) {
      const locationParam = searchParams.get('location');
      const budgetParam = searchParams.get('budget');

      if (locationParam) setLocation(locationParam);
      if (budgetParam) setBudget(budgetParam);

      // Perform initial search if we have parameters
      if (locationParam || budgetParam) {
        searchHospitals({
          location: locationParam || undefined,
          budget: budgetParam ? parseInt(budgetParam) : undefined,
          category: undefined,
          rating: undefined,
          filters: {
            nearbyArea: true,
            withinBudget: true,
            specifiedCategories: true
          }
        });
      }
    }
  }, [isAuthenticated, searchParams]);

  return (
    <div className='w-full'>
      <div className='' style={{ marginTop: '1rem', marginLeft: '4rem', marginRight: '4rem', marginBottom: '1rem'}}>
        <Topbar />
      </div>
      
      <div className='h-full flex'>
        <div className='flex w-3/12 h-full bg-[#F0F0F0] relative'>
          <div className='mt-4 ml-4 mr-6 w-full'>
            
            <div className=''>
              <Button size="icon" onClick={handleBack}>
                <ArrowLeft className="h-6 w-6"/>
              </Button>
            </div>
            
            <div className='mt-4 ml-2'>
              <p className='text-xl font-medium'>Search Criteria</p>
              <p className='text-sm mt-6'>Location</p>
              <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                
                <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
                  <MapPin stroke='#000000' className="absolute ml-2"/>
                  <input 
                    className="py-2 pl-11 w-full" 
                    id="location" 
                    type="text" 
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <p className='text-sm mt-4'>Medical Need</p>

                <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
                  <Stethoscope className="absolute ml-2"/>
                  <input 
                    className="py-2 pl-11 w-full" 
                    id="category" 
                    type="text" 
                    placeholder="Enter medical category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <p className='text-sm mt-4'>Budget</p>

                <div className='flex mt-2 shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white items-center w-full'>
                  <IndianRupee className="absolute ml-2"/>
                  <input 
                    className="py-2 pl-11 w-full" 
                    id="budget" 
                    type="number" 
                    placeholder="Enter your budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <button 
                  type="submit"
                  className='mt-8 w-full h-12 rounded-lg text-white bg-red transform transition duration-500 hover:scale-105'
                >
                  Search
                </button>
              </form>

              <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
              <p className='text-xl font-medium mt-4 mb-4'>Filter</p>
              
              <div className="flex items-center mb-4">
                <input 
                  checked={filters.nearbyArea}
                  onChange={() => handleFilterChange('nearbyArea')}
                  id="nearby-area" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Within Nearby Area</label>
              </div>
              
              <div className="flex items-center mb-4">
                <input 
                  checked={filters.withinBudget}
                  onChange={() => handleFilterChange('withinBudget')}
                  id="within-budget" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Within Budget</label>
              </div>
              
              <div className="flex items-center mb-4">
                <input 
                  checked={filters.specifiedCategories}
                  onChange={() => handleFilterChange('specifiedCategories')}
                  id="specified-categories" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Only Specified Categories</label>
              </div>

              <p className='text-xl font-medium mt-6 mb-4'>Rating</p>
              <div className="flex items-center mb-3">
                <input 
                  checked={rating === 4}
                  onChange={() => setRating(4)}
                  id="rating-4" 
                  type="radio" 
                  name="rating" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">4★ and above</label>
              </div>

              <div className="flex items-center mb-3">
                <input 
                  checked={rating === 3}
                  onChange={() => setRating(3)}
                  id="rating-3" 
                  type="radio" 
                  name="rating" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">3★ and above</label>
              </div>

              <div className="flex items-center mb-3">
                <input 
                  checked={rating === 2}
                  onChange={() => setRating(2)}
                  id="rating-2" 
                  type="radio" 
                  name="rating" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">2★ and above</label>
              </div>

              <div className="flex items-center mb-3">
                <input 
                  checked={rating === 1}
                  onChange={() => setRating(1)}
                  id="rating-1" 
                  type="radio" 
                  name="rating" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">1★ and above</label>
              </div>
              
              <div className="flex items-center mb-4">
                <input 
                  checked={rating === undefined}
                  onChange={() => setRating(undefined)}
                  id="rating-all" 
                  type="radio" 
                  name="rating" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">All Ratings</label>
              </div>
            </div>
          </div>
        </div> 

        <div className='w-9/12 p-8'>
          <p className='text-xl font-normal mb-4'>Showing results for the search criteria.</p>
          
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          {hospitals.map((hospital) => (
            <div key={hospital.$id} className='h-72 w-full bg-[#F0F0F0] rounded-3xl flex mb-4'>
              <img 
                src={getRandomHospitalImage()} 
                alt={hospital.name} 
                className='object-cover h-[16rem] w-[16rem] top-3 rounded-3xl mt-4 ml-4 mr-4'
              />
              <div className='w-7/12'>
                <p className='mt-4 text-4xl font-normal'>{hospital.name}</p>
                <p className='mt-12'>Specialities :</p>
                <div className='flex'>
                  {(hospital.Specialities ? hospital.Specialities.split(',').map((s: string) => s.trim()) : []).map((specialty: string, index: number) => (
                    <div key={index} className='h-8 pl-2 pr-3 flex w-fit items-center bg-white rounded-full border-2 mr-2'>
                      <p>{specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-3/12 justify-end'>
                <div className='h-1/2 w-full flex justify-end'>
                  <div className='flex mr-4 mt-4 items-center h-12 justify-end'>
                    <p className='mr-2 font-medium text-xl'>Rating</p>
                    <div className='h-12 w-24 bg-blue-600 rounded-full items-center flex justify-center'>
                      <p className='text-white font-bold text-2xl'>{hospital.rating} ★</p>
                    </div>
                  </div>
                </div>
                <div className='h-1/4 w-full flex items-end justify-end'>
                  <p className='mr-4 text-xl'>Budget :</p>
                  <p className='mr-4 text-4xl font-bold'>₹ {hospital.budget}</p>
                </div>
                <div className='h-1/4 w-full flex items-end justify-end'>
                  <div className='flex'>
                    <a href={`/hospital/${hospital.$id}`}>
                      <div className='w-[22rem] h-12 mr-4 mb-4 bg-red rounded-2xl flex items-center justify-center transform transition duration-500 hover:scale-105'>
                        <p className='text-white text-lg'>See details</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search