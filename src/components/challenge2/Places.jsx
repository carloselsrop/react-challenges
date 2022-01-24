import { useContext } from 'react';
import { Challenge2Context } from '../../context/challenge2';

const Places = () => {
  const { places } = useContext(Challenge2Context);

  return (
    <div className='px-2 md:px-8'>
      {/* Title */}
      <div className='px-2'>
        <div className='flex items-center pb-4 justify-between font-body'>
          <div className='text-3xl font-bold'>Stays in Finland:</div>
          <div className='text-xl'>{places.length}+ stays</div>
        </div>
      </div>
      {/* Places List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {places.map(place => {
          return (
            <div key={place.id} className='p-2 hover:bg-gray-100 rounded-lg transition duration-300 select-none cursor-pointer border border-transparent hover:border-gray-100 sm:border-gray-50 sm:shadow-sm'>
              {/* Place Image */}
              <div className='pb-2'>
                <img className='w-full h-52 rounded-2xl object-cover object-center' src={place.img} alt="" />
              </div>
              {/* Place Info */}
              <div className='flex flex-col'>
                <div className='flex items-start justify-between'>
                  {
                    place.superhost &&
                    <span className={` ${place.superhost ? 'flex' : 'hidden'}`}>
                      {place.superhost
                        &&
                        <div className='border-2 border-red-500 bg-red-500 bg-opacity-10 uppercase rounded-full px-2 font-body font-black'>superhost</div>
                      }
                    </span>
                  }
                  <span className='px-4 flex font-body text-gray-600 text-xl space-x-1 font-semibold'>
                    <div>{place.type}.</div>
                    <div className='flex space-x-0.5'>
                      <div>{place.rooms}</div>
                      <div>{place.rooms > 1 ? <div>rooms</div> : <div> room</div>}</div>
                    </div>
                  </span>
                  <span className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className='text-sm font-semibold'>
                      {place.rating}
                    </div>
                  </span>
                </div>
                <div className='flex justify-between items-center font-bold font-body text-3xl'>
                  <div>{place.name}</div>
                  <div className='flex items-center'>
                    <div>${place.price}/</div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Places;