import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(././assets/images/banner.jpg)] h-auto bg-cover opacity-55 bg-center text-white flex flex-col justify-center items-center text-center gap-5 p-10 relative max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-blue-500 bg-blue-200 px-10 lg:my-10   py-5 lg:pt-5 lg:pb-15 '>Learn Islam the Right Way </h1>
            <div><h1 className='bg-blue-500 text-white py-5 px-10 lg:absolute text-center lg:top-40 lg:right-70 text-4xl'>"Anytime & Anywhere"</h1>
                </div>
            <p className='text-lg max-w-2xl'>
                Join our online Islamic courses and gain knowledge from qualified scholars. Flexible learning at your fingertips.
            </p>
            <button className='bg-blue-500 text-white  btn rounded text-base hover:bg-blue-50 hover:text-blue-500'>Enroll Now</button>
        </div>
    );
};

export default Banner;