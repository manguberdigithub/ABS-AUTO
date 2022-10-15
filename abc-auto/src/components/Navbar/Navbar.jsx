import React from 'react';
// import sass
import './Navbar.scss';


/*---------Import photo and svg--------*/
import location from '../../assets/Svg/Group.svg';
import watch from '../../assets/Svg/Group 3328.svg';
import Whatsapp from '../../assets/Svg/Vector.svg';
import navlogo from '../../assets/Images/navLogo.png';
import phone from '../../assets/Svg/phone.svg';
/*---------/Import photo and svg--------*/


const Navbar = () => {
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
            <h6><span>10 лет</span>превосходим
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
            <h4><img src={phone} alt="#" />+7 (800) 551-94-31</h4>
            <span>+7 (495) 292-18-67</span>
          </div>
          <button className='navbar_container_call'>Обратный звонок</button>
        </div>
      </div>
    </nav>
  )
}





export default Navbar
