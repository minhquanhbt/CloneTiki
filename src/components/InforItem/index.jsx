import React from 'react';
import './inforItem.scss';
function InforItem({ img, price, priceCu, sale }) {
  return (
    <div className="InforItem">
      <div className="row">
        <div className="col-lg-4">
          <div className="item">
            <div className="img__big">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="item">
            <div className="row">
              <div className="col-lg-8">
                <div className="item__text">
                  <div className="title">
                    <span className="plash">
                      Flash Drive Memory Stick Fold Storage Thumb Stick Swivel
                      Design
                    </span>
                  </div>
                  <div className="gia">
                    <span className="chinh">{price}</span>
                    <span className="giamgia">{priceCu}</span> <span>{sale}</span>
                    <p>Hàng quốc tế</p>
                    <p className="call">
                      <span>Hoàn tiền 15% tối đa 600k/tháng</span>
                    </p>
                  </div>
                  <div className="color">
                    <span>color: red</span>
                    <br />
                  </div>
                  <div className="diachi">
                    <p>
                      Bạn hãy <span className="hoa"> NHẬP ĐỊA CHỈ</span> nhận
                      hàng để được dự báo thời gian & chi phí giao hàng một cách
                      chính xác nhất.
                    </p>
                  </div>
                  <div className="so_luong">
                    
                    <div className="so">
                      <input type="number" />{' '}
                      <span className="trongkho"><p>Số Lượng</p></span>
                    </div>
                  </div>
                  <button className="mua">Chọn mua</button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item__text">
                  <div className="magi">
                    <div className="veshop">
                      <a href="a">
                        <img
                          src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png"
                          alt=""
                        />
                        <span>Xem shop</span>
                      </a>
                      <a href="a">
                        <img
                          src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png"
                          alt=""
                        />
                        <span>Theo doi </span>
                      </a>
                    </div>
                  </div>
                  <div className="hoanlai">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforItem;
