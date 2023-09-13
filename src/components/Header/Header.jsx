import profile from '../../assets/profile.png'
const Header = () => {

    return (
        <div className='container mx-auto'>
            <div className='h-5 w-full bg-violet-400 my-2 px-3'></div>
            <div className='flex justify-between p-4 mt-10 border-b-2 '>
                <h1 className='text-4xl md:text-5xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;