import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Challenge1 from '../pages/Challenge1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/challenge1' element={<Challenge1 />} />
      </Routes>
    </div>
  )
}

export default App;
