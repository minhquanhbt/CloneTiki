import React, { useEffect } from 'react';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import ItemCart from './ItemCart';
function Cart() {
  const infoUser = useSelector(state => state.infoUser.user);
  return (
    <div className="cart">
      <div className="cart__container">
        <h1>Giỏ hàng</h1>
        <div className="row">
          <div className="col-lg-9">
            <div className="cart__items">
              <div className="row">
                <div className="col-lg-5">
                <span>Tất cả (2 sản phẩm)</span>
                </div>
                <div className="col-lg-2">
                <span>Đơn giá</span>
                </div>
                <div className="col-lg-2">
                <span>Số lượng</span>
                </div>
                <div className="col-lg-2">
                <span>Thành tiền</span>
                </div>
                <div className="col-lg-1">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
                </div>
              </div>
                <ItemCart img ="https://salt.tikicdn.com/cache/200x200/ts/product/da/44/d1/4b892f52ea47b2a60310f10ffd0fae91.jpg" textsp="Memory Stick USB 3.0 Flash Drive, High Speed Cover Design USB Stick,Thumb Drive Pen Drive for Data" priceChinh ="232435" priceCu="4546656" allPrice="23355" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cart__items">
              <div className="infoAddress">
                <h6>Giao tới</h6> <br />
                <div className="nameSdt">
                  <span>{infoUser.name}</span> <span>0763066253</span>
                </div>
                <div className="add">
                  <p>
                    đội 3, thôn Quang Trung, xã Lương Trung, huyện Bá thước tỉnh
                    Thanh Hoá, Xã Lương Trung, Huyện Bá Thước, Thanh Hóa
                  </p>
                </div>
              </div>
              <div className="priceCart">
                <div className="chil__price">
                  <span>Tạm tính</span>
                  <span>0đ</span>
                </div>
                <div className="chil__price">
                  <span>Giảm giá</span>
                  <span>0đ</span>
                </div>
                <div className="chil__price">
                  <span>Tổng cộng</span>
                  <span className="allPrices">0đ</span>
                </div>
              </div>
              <button>Mua hang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
