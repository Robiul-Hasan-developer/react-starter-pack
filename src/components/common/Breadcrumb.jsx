import React from 'react';

const Breadcrumb = ({cover, subtitle, title}) => {
    return (
        <section className='breadcrumb'>
            <img src={cover} alt="Background Image" className="breadcrumb__bg" />
            <div className="container">
                <div className="breadcrumb-content">
                    <span className="breadcrumb-content__text">{subtitle}</span>
                    <h2 className="breadcrumb-content__title text-white">{title}</h2>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;