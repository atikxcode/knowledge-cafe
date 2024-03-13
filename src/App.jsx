import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     
    <Header></Header>
    <div className='container mx-auto mb-10'>
      <div className='flex flex-col lg:flex-row justify-between'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
   
    </div>
      
    </>
  )
}

export default App
