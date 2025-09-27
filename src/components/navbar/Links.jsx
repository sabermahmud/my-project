import React from 'react';

const Links = ({item}) => {
    const {path, title_en} = item;
    return (
        <div className=''>
            <ul>
                <a href={path} className='text-lg hover:text-blue-500'>{title_en}</a>
            </ul>
            
        </div>
    );
};

export default Links;




// id: 4
// path: "/instructors"
// title_ar : "المدربون"
// title_bn : "শিক্ষকবৃন্দ"
// title_en : "Instructors"