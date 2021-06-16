import React, { useEffect } from 'react';
import './ListProduct.scss';
import { Tabs, Tab } from 'react-bootstrap';
import ProductItem from './ProductItem';
function ListProduct() {
  return (
    <div className="list__product">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <div className="items">
            <div className="row">
              
              <div className="col-lg-3 col-md-4 col-12">
                <div className="london__chil">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg" alt="a" />
                  <div className="cen">
                    <p>
                      Combo 5 GIỎ SẮT Treo Chậu Hoa Ban Công Hình Tròn - Màu Đen
                    </p>
                    <div className="price">
                      <div className="price__discout">278.000 ₫</div>
                      <div className="price__discout2">-2%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="london__chil">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg" alt="a" />
                  <div className="cen">
                    <p>
                      Combo 5 GIỎ SẮT Treo Chậu Hoa Ban Công Hình Tròn - Màu Đen
                    </p>
                    <div className="price">
                      <div className="price__discout">278.000 ₫</div>
                      <div className="price__discout2">-2%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="london__chil">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/25/66/2c/4c2dcb2ad9a1c5dc09768058c7b7558e.jpg" alt="a" />
                  <div className="cen">
                    <p>
                      Combo 5 GIỎ SẮT Treo Chậu Hoa Ban Công Hình Tròn - Màu Đen
                    </p>
                    <div className="price">
                      <div className="price__discout">278.000 ₫</div>
                      <div className="price__discout2">-2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          asdf
        </Tab>
        <Tab eventKey="contact" title="Contact">
          sdfsdf
        </Tab>
      </Tabs>
    </div>
  );
}

export default ListProduct;
