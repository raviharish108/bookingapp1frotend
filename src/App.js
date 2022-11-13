import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Header } from './Header';
import {Home} from './Home';
import { Createroom } from './Createroom';
import { Booking } from './Booking';
import { BookedRoom } from './BookedRoom';
import {CustomerData} from './BookedRoom';
function App() {
  return (
    <div>
     <Header/>
     <Routes>
         <Route path="/" element={ <Home/> } /> 
        <Route path="/createroom" element={  <Createroom/> } />
        <Route path="/booking/:id" element={  <Booking/> } />
        <Route path="/bookedroom" element={ <BookedRoom/>  } />
        <Route path="/customerdata/:id" element={ <CustomerData/>  } />
      </Routes>
    </div>
  );
}

export default App;
