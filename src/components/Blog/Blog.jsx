

import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, 
        author_img,posted_date, 
        reading_time, hashtags} = blog;
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
                   <button onClick={() => handleAddToBookmark(blog)} className='text-violet-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold'>{title}</h1>
            <div>
            {
                hashtags.map((hash) => <span className='pr-4' key={hash.idx}>{hash}</span>)
            }
            </div>
            <p className='text-violet-800 underline'>Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}
export default Blog;