import Bookmark from "./Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 py-5 px-3 rounded-lg mt-10">
            <h1 className="text-3xl font-semibold text-center mb-4">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}
export default Bookmarks;