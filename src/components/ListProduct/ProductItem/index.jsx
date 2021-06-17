import React from 'react';
import './productItem.scss';
function productItem({content,Price,sale, img}) {
  return (
    <div className="col-lg-3 col-md-4 col-12">
      <div className="london__chil">
        <img
          src={img}
          alt="a"
        />
        <div className="cen">
          <p>{content}</p>
          <div className="price">
            <div className="price__discout">{Price}</div>
            <div className="price__discout2">{sale}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productItem;
