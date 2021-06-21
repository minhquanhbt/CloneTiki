import React, {useState} from 'react';
import './ListProduct.scss';
import { Tabs, Tab , Collapse } from 'react-bootstrap';
import ProductItem from './ProductItem';
function ListProduct() {
  const [open, setOpen] = useState(false);
  return (
    <div className="list__product">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title = {<div className ="danhcho"><img src="https://salt.tikicdn.com/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png" alt="a" /><br/><span>Dành cho bạn</span></div>}>
          <div className="items">
            <div className="row">
              <ProductItem id = "1" content ="blabla" Price="10000d" sale="2%"  img ="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg"/>
              <ProductItem id = "2" content ="blabla" Price="10000d" sale="2%"  img ="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg"/>
            </div>
          </div>
          <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className = "viewMore"
      >
        Xem thêm
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </Tab>
        <Tab eventKey="profile" title={<div className ="danhcho"><img src="https://salt.tikicdn.com/ts/upload/14/d2/fa/49a9882cea6c62cc2527d297634f345a.png" alt="a" /><br/><span>Hàng mới</span></div>}>
          asdf
        </Tab>
        <Tab eventKey="contact" title={<div className ="danhcho"><img src="https://salt.tikicdn.com/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png" alt="a" /><br/><span>Nhà cửa - đời sống</span></div>}>
          sdfsdf
        </Tab>
        <Tab eventKey="contac" title={<div className ="danhcho"><img src="https://salt.tikicdn.com/ts/category/88/a3/23/4025f0ccef53189c957bd6c2fc79cb58.png" alt="a" /><br/><span>Nhà sách Tiki</span></div>}>
          sdfsdf
        </Tab>
      </Tabs>
    </div>
  );
}

export default ListProduct;
