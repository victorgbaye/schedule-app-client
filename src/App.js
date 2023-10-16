import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SideBar from './components/Compound/Sidebar';
import Calendar from './components/Compound/Calendar/Calendar';
import Client from './pages/Client/Client';
import Bookings from './pages/Bookings/Bookings';
// import Signup from './pages/SignUp/Signup';
function App() {
  return (
   <div className='App'>
    <SideBar/>
    <main className='content'>

      <Router>

        <Routes>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/clients" element={<Client />} />
          <Route path="/bookings" element={<Bookings />} />
          {/* <Route path="/bookings" element={<Signup />} /> */}

          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        <Routes>
        <Route path="/sidebar" element={<SideBar />} />
        </Routes>
      </Router>
    </main>

   </div>
  );
}

export default App;
