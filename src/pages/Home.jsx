import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

  const [links] = useState([
    {
      id: 1,
      path: 'challenge1',
      name: 'Challenge 1'
    },
    {
      id: 2,
      path: '/challenge2',
      name: 'Challenge 2'
    },
    {
      id: 3,
      path: '/challenge3',
      name: 'Challenge 3'
    },
    {
      id: 4,
      path: '/challenge4',
      name: 'Challenge 4'
    },
    {
      id: 5,
      path: '/challenge5',
      name: 'Challenge 5'
    },
    {
      id: 6,
      path: '/challenge6',
      name: 'Challenge 6'
    },
    {
      id: 7,
      path: '/challenge7',
      name: 'Challenge 7'
    },
    {
      id: 8,
      path: '/challenge8',
      name: 'Challenge 8'
    },
  ])

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-50'>
      <div className='space-y-10 flex flex-col items-center'>
        {/* Logo */}
        <div className='flex space-x-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <div className='font-black font-mono text-lg select-none'>
            <span className='text-orange-500'>Dev</span>
            <span>challenges</span>
            <span>.io</span>
          </div>
        </div>
        {/* Links */}
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 px-4'>
          {links.map(item => {
            return (
              <Link key={item.id} to={`${item.path}`} className='text-sm text-gray-800 shadow-sm rounded-md  font-semibold bg-gray-300 px-3 py-3 hover:bg-orange-500 hover:bg-opacity-90 transition duration-300 hover:text-white text-ellipsis'>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;  