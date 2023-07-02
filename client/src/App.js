import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
