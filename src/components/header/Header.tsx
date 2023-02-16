import Styled from './header.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

  let navigate = useNavigate();

  return (
    <React.Fragment>
      <header>
        <div className={Styled.header_area}>
          <div className={Styled.shadow_bot_line}>
            <div className={Styled.ico_gnb_area}>
              <div className={Styled.ico_box} onClick={()=>{navigate('/')}}>
                <img 
                  src={process.env.PUBLIC_URL + '/Pudding.png'} 
                  alt='logo' 
                  className={Styled.ico_img}/>
                <p className={Styled.ico_name}>Sweet<br/>Dessert</p>
              </div>
              <div className={Styled.gnb_box}>
                <ul className={Styled.gnb_list}>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/home.png'} alt='Home'/>
                    <span>HOME</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/shop')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/shop.png'} alt='Home'/>
                    <span>SHOP</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/cart')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/cart.png'} alt='Home'/>
                    <span>CART</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/user')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/user.png'} alt='Home'/>
                    <span>USER</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Styled.shadow_bot_line}>
            <div className={Styled.lnb_area}>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}