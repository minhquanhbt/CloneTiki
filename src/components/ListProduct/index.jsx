import React, {useState} from 'react';
import './ListProduct.scss';
import { Tabs, Tab, Button, Collapse } from 'react-bootstrap';
import ProductItem from './ProductItem';
function ListProduct() {
  const [open, setOpen] = useState(false);
  return (
    <div className="list__product">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <div className="items">
            <div className="row">
              <ProductItem content ="blabla" Price="10000d" sale="2%"  img ="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg"/>
              <ProductItem content ="blabla" Price="10000d" sale="2%"  img ="https://salt.tikicdn.com/cache/280x280/ts/product/ea/22/4f/4197a560252cf0f30e8cd2aacb07fcc5.jpg"/>
            </div>
          </div>
          <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
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
