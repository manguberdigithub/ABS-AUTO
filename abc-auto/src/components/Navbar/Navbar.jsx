import React from 'react';
import { useState, useEffect } from 'react';
// import sass
import './Navbar.scss';



/*---------Import photo and svg--------*/
import location from '../../assets/Svg/Group.svg';
import watch from '../../assets/Svg/Group 3328.svg';
import Whatsapp from '../../assets/Svg/Vector.svg';
import navlogo from '../../assets/Images/navLogo.png';
import phone from '../../assets/Svg/phone.svg';
import pointing from '../../assets/Svg/pointing.svg'
import heart from '../../assets/Svg/Vector 348.svg';
import Vector2 from '../../assets/Svg/Vector (2).svg';
import Vector1 from '../../assets/Svg/Vector (1).svg';
/*---------/Import photo and svg--------*/


const Navbar = () => {
  const [num, setNum] = useState(0);
 const heandleClick = () => {
  setNum((prev) => prev + 1);
  localStorage.setItem("num", (num));
}
  

//  useEffect(() => {
//    localStorage.getItem('num', JSON.stringify(num));
// }, [num]);

  return (
    <nav className='navbar'>
      <div className="navbar_top">
        <div className='navbar_top_time'>
          <p><span><img src={location} alt="#" /></span>Россия, Москва, 38КМ МКАД, 6Бс1</p>
          <p><span><img src={watch} alt="#" /></span>Время работы: c 08:00 до 21:00</p>
        </div>
        <a className='navbar_top_link' href='/'><span><img src={Whatsapp} alt="#" /></span>Whatsapp</a>
      </div>
      <div className="navbar_container">
        <div className='navbar_container_main'>
          <div className='navbar_container_logo'>
            <a href="/"><img src={navlogo} alt="#" /></a>
          </div>
          <div className='navbar_container_main_expectation'>
            <h6><span>10 лет </span>превосходим
              ваши ожидания</h6>
          </div>
          <ul className='navbar_container_main_link'>
            <li>
              <a href='/'>Подбор авто</a>
              <a href='/'>О компании</a>
              <a href='/'>Техцентр</a>
              <a href='/'>Отзывы</a>
              <a href='/'>Контакты</a>
            </li>
          </ul>
          <div className='navbar_container_main_contact'>
            <div className='navbar_container_main_contact_phone'>
              <span className='navbar_container_main_contact_phone_img'><img src={phone} alt="#" /></span>
              <h3>+7 (800) 551-94-31</h3>
            </div>
            <h5>+7 (495) 292-18-67</h5>
          </div>
          <button className='navbar_container_main_call'>Обратный звонок</button>
        </div>
        <div className="navbar_container_bottom">
          <ul className="navbar_container_bottom_services">
            <li>
              Каталог авто 
              <span><img src={pointing} alt="#" /></span>
              </li>
            <li>
              Авто с пробегом
              <span><img src={pointing} alt="#" /></span>
              </li>
            <li>
              Кредит и рассрочка
              <span><img src={pointing} alt="#" /></span>
              </li>
            <li>
              Спецпредложения
              <span><img src={pointing} alt="#" /></span>
              </li>
            <li>
              Такси в кредит
              <span><img src={pointing} alt="#" /></span>
              </li>
          </ul>
          <div className="navbar_container_bottom_like">
            <button onClick={() => heandleClick()}>
               <img src={heart} alt="#" />
               <span>{num}</span>
            </button>
            <button>
               <img src={Vector2} alt="#" />
               <span>12</span>
            </button>
            <button >
               <img src={Vector1} alt="#" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
            





export default Navbar
