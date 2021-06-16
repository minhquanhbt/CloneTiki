import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import Voucher from '../../components/Voucher';
import Banner from '../../components/Banner';
import HomeSale from '../../components/HomeSale';
import Pay from '../../components/Pay';
import SearchProduct from '../../components/SearchProduct';
import ListHighlight from '../../components/ListHighlight';
import EndowProduct from '../../components/EndowProduct';
import ListProduct from '../../components/ListProduct';
// import { Company } from '../../mocks';

function Home() {
  // const infoUser = useSelector(state=>state.infoUser.user);
  // console.log('infoUser',infoUser);
  return (
    <div className="home">
      <Banner/>
      <HomeSale/>
      <Pay/>
      <Voucher/>
      <ListHighlight/>
      <SearchProduct/>
      <EndowProduct/>
      <ListProduct/>
    </div>
  );
}

export default Home;
