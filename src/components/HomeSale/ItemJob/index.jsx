import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import { FaFolderMinus } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import './ItemJob.scss';

function ItemJob({ img, discout, price, status,now }) {
  // const history = useHistory();
  // const handlerViewDetail = (id)=>{
  //   history.push(`/detail/${id}`);
  // }
  return (
    <div className="item">
      <div className="chil">
        <div className="img">
          <div className="img__chil">
            <img src={img} alt="a" />
            <div className="discout">{discout}</div>
          </div>
        </div>
        <div className="price">{price}</div>
        <div className="pty">
          <ProgressBar animated now={now} label ={now}  />
        </div>
      </div>
    </div>
  );
}

export default ItemJob;
