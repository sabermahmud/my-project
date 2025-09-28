import React, { use } from 'react';
import Links from './links';

const NavBar = ({ navDataPromise }) => {
    const navData = use(navDataPromise);

    return (
        <>
            <div className='flex justify-between items-center p-5 shadow-lg shadow-blue-600/20 max-w-7xl mx-auto'>
                {/* logo */}
                <div>
                    <h2 className='text-2xl'>Jamiya <span className='text-blue-500'>Islamiyah</span></h2>
                </div>
                {/* navMenu */}
                <div className='flex justify- lg:gap-15 items-center p-4 '>
                    {
                        navData.data.map(item => <Links key={item.id} item={item}></Links>)
                    }
                </div>
                {/* navEnd buttons */}
                <div className='flex gap-4'>
                    <button className='bg-blue-500 text-white  btn rounded text-base hover:bg-blue-50 hover:text-blue-500'>Enroll Now</button>
                    <button className='bg-blue-500 text-white  btn rounded text-base hover:bg-blue-50 hover:text-blue-500'>Log in</button>

                </div>
            </div>
        </>
    );
};

export default NavBar;