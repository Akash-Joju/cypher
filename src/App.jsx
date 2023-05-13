import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from'./pages/home'
import Form from'./pages/form'
import Front from'./pages/front'
function App() {
  return (
    <div className='bg' >
      <Navbar/>
      <br />
      <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes>
      <br />
    </div>
  );
}

export default App;