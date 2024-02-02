import React from 'react';
import './App.css';
import ArticleModify from './pages/articleModify/articleModify';
import ModeratorPage from './pages/ModeratorPage/ModeratorPage';
import SignUp from './pages/SignPages/SignUp'
import SignIn from './pages/SignPages/SignIn'
import SearchPage from './pages/searchPage';
import DetailArticle from './pages/detailArticle';
import FavoritesPage from './pages/favoritesPage';
import LandingPage from './pages/landingPage';
import AddArticle from './test';
import AdminPage from './pages/adminPage/adminPage';

import { Route, Routes,  BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes... */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserSpace" element={<SearchPage />} />
        <Route path="/ModeratorSpace" element={<ModeratorPage />}  />
        <Route path="/AdminSpace" element={<AdminPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
