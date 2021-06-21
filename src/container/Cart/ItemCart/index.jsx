import React, { useEffect } from 'react';
import './itemCart.scss';
function ItemCart({img,textsp,priceChinh, priceCu, allPrice}) {
  return (
    <div className="ItemCart">
      <div className="row">
        <div className="col-lg-5">
          <span className="imgText">
            {' '}
            <span className="img">
              <img
                src={img}
                alt=""
              />
            </span>{' '}
            <span className="textsp">
             {textsp}
            </span>
          </span>
        </div>
        <div className="col-lg-2">
          <span>
            <span className="giachinh">{priceChinh}</span>
            <span className="giacu">{priceCu}</span>
          </span>
        </div>
        <div className="col-lg-2">
          <span>
            <input type="number" defaultValue="1" />
          </span>
        </div>
        <div className="col-lg-2">
          <span className="tonggia">{allPrice}</span>
        </div>
        <div className="col-lg-1">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
