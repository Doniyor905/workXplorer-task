import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
