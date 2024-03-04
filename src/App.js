import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import SpeakersPage from './pages/speakerspage';
import SponsorsPage1 from './pages/sponsorspage1';
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/speaker' element = {<SpeakersPage/>}></Route>
            <Route path='/sponsor' element = {<SponsorsPage1/>}></Route>
          </Routes>
        </Router>
      </>
    
  );
}

export default App;
