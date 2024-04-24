import React from 'react'
import Header from './componant/Header'
import Nav from './componant/Nav'
import Footer from './componant/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './Home';
import NewPost from './NewPost';
import PostBage from './PostBage';
import Massege from './Massege';
import About from './Massege';
const App = () => {
  return (
    <>
      <Header />
      <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post' element={<NewPost/>} />
          <Route path='/post/:id' element={<PostBage/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
