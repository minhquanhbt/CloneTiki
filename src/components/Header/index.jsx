import React from 'react';
import './Header.scss';

import ModalDK from '../ModalDK';
import ModalDN from '../ModalDN';
function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <div className="header">
      <div className="header__center">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__item">
              <div className="logo__center">
                <div className="logo">
                  <img
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                    alt="aa"
                  />
                </div>
                <a href="a" className="humbeger">
                  <div className="img__hum">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/96/d1/77/e499ea39b0773a337d2217ad473fcb97.png"
                      alt="aas"
                    />
                  </div>
                  <a className="text" href="a">
                    <span className="dm">Danh mục</span> <br />
                    <span className="sp">sản phẩm</span>
                  </a>
                  <span className="icon__dow">
                    <i class="fas fa-sort-down"></i>
                  </span>
                  <div className="humbeger__hover">
                    <ul>
                      <li>
                        <a href="a">Điện thoại - máy tính bảng</a>
                      </li>
                      <li>
                        <a href="s">Điện tử điên lạnh</a>
                      </li>
                      <li>
                        <a href="s">Laptop - thiết bị IT</a>
                      </li>
                      <li>
                        <a href="d">Máy ảnh - Quay Phim</a>
                      </li>
                      <li>
                        <a href="d">Điện gia dụng</a>
                      </li>
                      <li>
                        <a href="a">Điện thoại - máy tính bảng</a>
                      </li>
                      <li>
                        <a href="s">Điện tử điên lạnh</a>
                      </li>
                      <li>
                        <a href="s">Laptop - thiết bị IT</a>
                      </li>
                      <li>
                        <a href="d">Máy ảnh - Quay Phim</a>
                      </li>
                      <li>
                        <a href="d">Điện gia dụng</a>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header__item">
              <div className="search">
                <div className="search__top">
                  <input
                    type="text"
                    placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn... "
                  />
                  <span className="sea">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                      alt="as"
                    />
                    <span>Tìm kiếm</span>
                  </span>
                </div>
                <div className="search__bot">
                  <ul className="list__catelory">
                    <li>bình giữ nhiệt</li>
                    <li>máy lạnh</li>
                    <li>đầm dự tiệc</li>
                    <li>đồng hồ thông minh</li>
                    <li>mũ bảo hiểm</li>
                    <li>tai nghe bluetooth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="header__item">
              <div className="dkdn">
                <div className="dkdn__item">
                  <img
                    className="avt"
                    src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                    alt="as"
                  />
                  <div className="dkdn__text">
                    <div className="dkdn__top">
                      <span>
                        Đăng nhập/đăng ký
                        <div className="hover__drop">
                          <ul className="list_dn">
                            <li>
                              <span
                                className="dangnhap"
                                variant="primary"
                                onClick={() => setModalShow(true)}
                              >
                                Đăng Nhập
                              </span>

                              <ModalDN
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />
                            </li>
                            <li>
                              <span
                                className="dangnhap"
                                variant="primary"
                                onClick={() => setModalShow1(true)}
                              >
                                Tạo tài khoản
                              </span>

                              <ModalDK
                                show={modalShow1}
                                onHide={() => setModalShow1(false)}
                              />
                            </li>
                            <li>
                              <span className="dangnhap fb">
                                Đăng nhập bằng Facebook
                              </span>
                            </li>
                            <li>
                              <span className="dangnhap gg">
                                Đăng nhập bằng Google
                              </span>
                            </li>
                            <li>
                              <span className="dangnhap zalo">
                                Đăng nhập bằng Zalo
                              </span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                    <span className="user">Tài khoản</span>
                  </div>
                </div>
                <a href="a" className="dkdn__itemm">
                  <div className="giohang">
                    <img
                      className="cart"
                      src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                      alt="as"
                    />

                    <span>giỏ hàng</span>
                  </div>
                  <a className="smail" href="a">
                    💰Bán hàng cùng Tiki
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
