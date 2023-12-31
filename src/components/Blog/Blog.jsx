

import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, 
        author_img,posted_date, 
        reading_time, hashtags, id} = blog;
    return (
        <div className='mt-10 space-y-6'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between my-4'>
                <div className='flex gap-2 md:gap-5'>
                <img className='w-12 h-12 md:w-16 md:h-16' src={author_img} alt="" />
               <div className='md:mt-2'>
               <p className='font-semibold text-lg md:text-xl'>{author}</p>
               <p ><small>{posted_date}</small></p>
               </div>
                </div>
                <div className='flex gap-1'>
                   <p className='mt-3 md:mt-5'>{reading_time} min read</p>
                   <button onClick={() => handleAddToBookmark(blog)} className='text-violet-500 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold'>{title}</h1>
            <div>
            {
                hashtags.map((hash, idx) => <span className='pr-4' key={idx}>{hash}</span>)
            }
            </div>
            <p onClick={()=> handleMarkAsRead(blog, id)} className='text-violet-800 underline'>Mark As Read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;