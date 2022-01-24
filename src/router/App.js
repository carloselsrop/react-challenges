import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Challenge2ContextProvider } from '../context/challenge2';
import Home from '../pages/Home'
import Challenge1 from '../pages/Challenge1'
import Challenge2 from '../pages/Challenge2'

const App = () => {
  return (
    <div>
      <Challenge2ContextProvider>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/challenge1' element={<Challenge1 />} />
          <Route path='/challenge2' element={<Challenge2 />} />

        </Routes>
      </Challenge2ContextProvider>
    </div>
  )
}

export default App;
