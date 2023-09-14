
import PropTypes from 'prop-types';
const Readingtime = ({readingTime}) => {
    
    return (
        <div className=" bg-slate-200 px-5 py-3 rounded-lg mt-16">
            <h1 className="text-center text-xl text-violet-800 font-bold">Time need to read: {readingTime} min</h1>
        </div>
    );
};
Readingtime.propTypes ={
    readingTime: PropTypes.number
}
export default Readingtime;