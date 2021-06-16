import React, { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { FaBuffer } from "react-icons/fa";

import { getAllJob } from '../../state/actions';
import './HomeJobs.scss';
import ItemJob from './ItemJob';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
function HomeSale() {
  // const dispatch = useDispatch();
  // const listJob = useSelector(state=>state.jobs.posts);

  // useEffect(() => {
  //   dispatch(getAllJob());
  // }, [])

  // const data = listJob?.map(item=><ItemJob key={item.id} item={item}/>)
 
  return (
    <div className="toDay">
    <div className="header_today">
      <div className="today">
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="a" />
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif" alt="a" />
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="a" />
      </div>
    </div>
    <OwlCarousel
          className="owl-theme"  
          loop={true} 
          nav={false} 
          dots={false} 
          // autoplay={true} 
          // autoplayTimeout={3000} 
          animateOut={'fadeOut'}
          items = {5}
           >  
           <ItemJob img="https://salt.tikicdn.com/cache/280x280/ts/product/e8/41/6c/2b2270362a39a3c99cda045edcb99f4b.jpg" discout="50%" price = "10000"  status="da het"/>
      </OwlCarousel>  
  </div>
  )
}

export default HomeSale;
