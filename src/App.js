
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Review';
import Dashbord from './components/Dashbord/Dashbord'
import Blog from './components/Blog/Blog'
import About from './components/About/About'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route> 
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;
