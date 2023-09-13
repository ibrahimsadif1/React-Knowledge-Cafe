import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto mt-10 px-5 gap-5'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      <div className='h-5 w-full bg-violet-400 my-5 px-3'></div>
    </>
  )
}

export default App
