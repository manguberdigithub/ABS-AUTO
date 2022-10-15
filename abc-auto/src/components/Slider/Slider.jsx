import React from 'react';
import './Slider.scss';
/*---------Import photo and svg--------*/
import cars from '../../assets/Images/cars.png';
import prev from '../../assets/Svg/prev.svg';
import next from '../../assets/Svg/next.svg';
/*---------/Import photo and svg--------*/

const Slider = () => {
  return (
    <div className='slider'>
      <button className='slider_prev'>
        <img src={prev} alt="#" />
      </button>
      <div className="slider_info">
        <div className='slider_info_left'>
          <p>Осталось всего 10 авто!</p>
        </div>
        <div className="slider_info_sale">
          <h1>Грандиозная распродажа <br />
            ff</h1>
          <p>Узнай свою цену!</p>
        </div>
      </div>
      <div className="slider_animate">
        <button className='slider_animate_btn active'></button>
        <button className='slider_animate_btn'></button>
        <button className='slider_animate_btn'></button>
        <button className='slider_animate_btn'></button>
        <button className='slider_animate_btn'></button>
        <button className='slider_animate_btn'></button>
      </div>
      <img className='slider_cars' src={cars} alt="#" />
      <button className='slider_next'>
        <img src={next} alt="#" />
      </button>
    </div>
  )
}

export default Slider