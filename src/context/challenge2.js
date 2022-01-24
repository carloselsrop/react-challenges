import { createContext, useState, useEffect } from 'react';

const Challenge2Context = createContext();

const Challenge2ContextProvider = ({ children }) => {
  // State
  const [recentSearch, setRecentSearchBar] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [places] = useState([
    {
      id: 1,
      name: 'The White House',
      type: 'Hotel',
      rooms: '1',
      superhost: true,
      rating: 4.5,
      img: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      price: 100,
    },
    {
      id: 2,
      name: 'Rosmary Hall',
      type: 'Hotel',
      rooms: '2',
      superhost: true,
      rating: 4.5,
      img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 200,
    },
    {
      id: 3,
      name: 'Uhala House',
      type: 'Hotel',
      rooms: '3',
      superhost: false,
      rating: 4.5,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 300,
    },
    {
      id: 4,
      name: 'Bukit Bintang',
      type: 'Hotel',
      rooms: '4',
      superhost: true,
      rating: 4.5,
      img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      price: 450,
      phone: '(202) 456-1111',
      website: 'https://www.whitehouse.gov/',
    }
  ]);

  // UseEffect
  useEffect(() => {
  }, []);

  // Methods
  const handleSearch = (search) => {
    setRecentSearchBar([...recentSearch, search]);
  };

  return (
    <Challenge2Context.Provider value={{
      places,
      recentSearch,
      searchResults,
      handleSearch,
    }}>
      {children}
    </Challenge2Context.Provider>
  );
}

export { Challenge2Context, Challenge2ContextProvider };