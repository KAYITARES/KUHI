import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import SpeakersPage from './pages/speakerspage';
import SponsorsPage1 from './pages/sponsorspage1';
import Agend from './pages/agenda';
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/speaker' element = {<SpeakersPage/>}></Route>
            <Route path='/sponsor' element = {<SponsorsPage1/>}></Route>
            <Route path='/agenda' element = {<Agend/>}></Route>
          </Routes>
        </Router>
      </>
    
  );
}

export default App;
