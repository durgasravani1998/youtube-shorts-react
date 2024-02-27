

import VideoDisplay from './Components/VideoDisplay';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BottomNavbar from './Components/BottomNavbar';


import './App.css';
import Navbar from './Components/Navbar';
// import Routing from './Components/Routing';

function App() {
  return(
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videodisplay' element={<VideoDisplay/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    {/* <BottomNavbar/> */}
  </Router>
)
}

export default App;
