import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <>
            <div className="section-heading">
                <h2 className='section-heading__title'> {title} </h2>   
                <p className='section-heading__desc'> {subtitle} </p>   
            </div>
        </>
    );
};

export default Heading;