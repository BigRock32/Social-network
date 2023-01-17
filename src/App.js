import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header/Header';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Router>

        <Header />
        <Navbar state={props.state.sideBar} />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;