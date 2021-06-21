import React, { useEffect } from 'react';
import './productInfor.scss';
import { useParams } from 'react-router-dom';
import {Product} from '../../mocks/index';
import InforItem from '../../components/InforItem';

function ProductInfor() {
  const param = useParams();
  console.log(param)
  const itemProduct = Product?.filter(item=>item.id==param.id)[0];
  console.log(itemProduct)
  return (
    <div className="ProductInfor">
        <InforItem img ={itemProduct.img} price={itemProduct.price} priceCu = {itemProduct.priceCu} sale={itemProduct.sale}  />
    </div>
  );
}

export default ProductInfor;
