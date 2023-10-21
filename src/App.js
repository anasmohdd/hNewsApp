import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import HackerNewsSearch from './components/HackerNewsSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HackerNewsSearch />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
