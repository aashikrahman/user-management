
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import List from './List/List';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Pages/Contactus';
import Community from './Pages/Community';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<List />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/community' element={<Community />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
