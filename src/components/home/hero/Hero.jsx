import React from 'react';
import BannerStyle from './Hero.module.css';
import Heading from '../../common/Heading';
import Filter from './Filter';

const Hero = () => {
    return (
        <section className={BannerStyle.heroSection}>
            <div className="container">
                <div className={BannerStyle.heroContent}>
                   <Heading title="This is Hero Title" subtitle="Find new & featured property located in your local city." />
                    <Filter/>
                </div>
            </div>
        </section>
    );
};

export default Hero;