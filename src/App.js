import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PlayerDetails from './components/PlayerDetails';
import PlayersSearchForm from './components/PlayersSearchForm';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<PlayersSearchForm />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
