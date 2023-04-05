import React from 'react';
import './slider.css';
import { useInView } from 'react-intersection-observer';

const Slider = ({ flipped, imageSrc, subtitle, title }) => {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4, //number 0 - 1 indicating % that should be visible before triggering.
    })

    const renderComponentContent = () => {

        if (!flipped) {
            return (
                <>
                    <img src={imageSrc} alt='wirral' className='sliderImage'/>
                    <div className='sliderText'>
                        <h2 className='sliderTitle'>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className='sliderText'>
                        <h1 className='sliderTitle'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt="wirral" className='sliderImage' />
                </>
            );
        }
    };


  return (
    <div className={inView ? "slider sliderZoom" : "slider" } ref={ref}>
       {renderComponentContent()}
      
    </div>
  );
};

export default Slider;
