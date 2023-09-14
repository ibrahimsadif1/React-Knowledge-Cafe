import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Readingtime from './components/ReadTime/Readingtime'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  

  const handleMarkAsRead = (time, id) =>{
    const readTime = time.reading_time;
    setReadingTime(readingTime + readTime);
    // remove the mark 
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks);
  }
  
  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto mt-10 px-5 gap-5'>
      <Blogs 
      handleMarkAsRead={handleMarkAsRead}
      handleAddToBookmark={handleAddToBookmark}
      ></Blogs>
      <div className='md:w-1/3'>
        <Readingtime readingTime={readingTime}></Readingtime>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
      <div className='h-5 w-full bg-violet-400 my-5 px-3'></div>
    </>
  )
}

export default App
