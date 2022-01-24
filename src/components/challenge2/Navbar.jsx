import { useContext, useState } from 'react';
import { Challenge2Context } from '../../context/challenge2';
import challenge2Logo from '../../assets/static/challenge2Logo.png';

const Navbar = () => {
  // State
  const { handleSearch, recentSearch } = useContext(Challenge2Context);
  const [searchBar, setSearchBar] = useState({
    location: '',
    guests: '',
  });
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  // Methods
  const OpenSearchBar = () => {
    setIsSearchBarOpen(true);
  };
  const CloseSearchBar = () => {
    setIsSearchBarOpen(false);
  };
  const onChange = (e) => {
    setSearchBar({
      ...searchBar,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    handleSearch(searchBar);
    CloseSearchBar();
    setSearchBar({
      location: '',
      guests: '',
    });
  };


  return (
    <div className="pb-6 flex flex-col sm:flex-row items-start sm:items-center md:justify-between">
      {
        isSearchBarOpen &&
        <div className='fixed top-0 w-full h-screen bg-white p-4'>
          <div className='flex justify-between font-body font-semibold text-xl items-center pb-8'>
            <div>Edit your search</div>
            <button onClick={CloseSearchBar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className='flex flex-col font-body pb-8'>
            <input onChange={onChange} name='location' value={searchBar.location} className='rounded-t-lg border py-2 px-2 focus:outline-none text-xl placeholder:text-xl placeholder:font-semibold placeholder:text-black placeholder:text-opacity-75' placeholder='Location' type="text" />
            <input onChange={onChange} name='guests' value={searchBar.guests} className='rounded-b-lg border py-2 px-2 focus:outline-none text-xl placeholder:text-xl placeholder:font-semibold placeholder:text-black placeholder:text-opacity-75' placeholder='Guests' type="text" />
          </div>
          <div className=' font-body'>
            {recentSearch.map((item, index) => (
              <button key={index}
                // onClick={() => handleSearch(item)}
                className='space-x-2 items-center flex bg-white  text-xl font-semibold text-black hover:bg-gray-100 hover:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black text-opacity-75" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className='text-opacity-70 text-black text-3xl'>
                  {item.location}, {item.guests} guests
                </div>
              </button>
            ))}
          </div>
        </div>
      }
      <div className='px-4 md:px-12 pt-4 pb-8 sm:w-6/12 flex'>
        <img src={challenge2Logo} alt="challenge2Logo" />
      </div>
      <div className='flex w-full sm:w-6/12 md:w-4/12 xl:w-3/12 2xl:w-2/12 px-4 md:px-8'>
        <input onClick={OpenSearchBar} value={searchBar.location} readOnly type="text" className='bg-white border w-6/12 shadow border-gray-100 py-3 px-2 focus:outline-none rounded-l-2xl text-sm placeholder:text-sm' placeholder='Location' />
        <input onClick={OpenSearchBar} value={searchBar.guests} readOnly type="text" className='bg-white border w-4/12 shadow border-gray-100 py-3 px-2 focus:outline-none text-sm placeholder:text-sm placeholder:text-center' placeholder='Guests' />
        <button onClick={onSubmit} className='w-2/12 bg-white flex justify-center shadow items-center rounded-r-2xl focus:outline-none border border-gray-100'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;