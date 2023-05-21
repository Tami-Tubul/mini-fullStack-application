import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPageComp from './pages/LoginPage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div className="App">

      <header>
        <h1>Movies System</h1>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<LoginPageComp />} />
          <Route path='/movies' element={<MoviesPage />} />
        </Routes>
      </main>

      <footer>copyright</footer>

    </div>
  );
}

export default App;
