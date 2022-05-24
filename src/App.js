import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SelectUser from './pages/SelectUser';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import MyList from './pages/MyList/MyList';
import Search from './pages/Search/Search'

function App() {
  return (
  <Router>
      <div className="App">
        
          <Routes>
            <Route path="/" element={<SelectUser/>}/> 
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Series" element={<Series/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/MyList" element={<MyList/>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/Search" element={<Search/>}/>
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
