import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PlayerDetails from './components/PlayerDetails';
import PlayersSearchForm from './components/PlayersSearchForm';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<ProtectedRoute />}>
            <Route path="/main" element={<Main />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<PlayersSearchForm />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
