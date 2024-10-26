import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import About from './pages/about/About'
import BookReview from './pages/book-review/BookReview'
import Books from './pages/books/Books'
import Contact from './pages/contact/Contact'
import HomePage from './pages/homepage/HomePage'

function App() {
  

  return (
    <div>

      <Nav />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/book-review' element={<BookReview/>} />
          <Route path='/contact' element={<Contact/>} />
          
      </Routes>
      

      
    </div>
  )
}

export default App
