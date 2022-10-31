import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import About from './components/About'
import User from './components/User';
import Error from './components/Error';
import Layout from './components/Layout';
import Posts from './components/Posts'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='User' element={<User />}/>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;