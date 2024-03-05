import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import SpeakersPage from './pages/speakerspage';
import SponsorsPage1 from './pages/sponsorspage1';
<<<<<<< HEAD
import Agenda from './pages/Agenda';
=======
import SignUpPage from './pages/signuppage';
import MembersPage from './pages/memberPage';
>>>>>>> f5a3d7b (changes)
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/speaker' element = {<SpeakersPage/>}></Route>
            <Route path='/sponsor' element = {<SponsorsPage1/>}></Route>
<<<<<<< HEAD
            <Route path='/agenda' element = {<Agenda/>}></Route>
=======
            <Route path='/signup' element = {<SignUpPage/>}></Route>
            <Route path='/members' element = {<MembersPage/>}></Route>
>>>>>>> f5a3d7b (changes)
          </Routes>
        </Router>
      </>
    
  );
}

export default App;
