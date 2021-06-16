import React, {useState} from 'react';
import './ModalDK.scss';
import { Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {userSignUp} from '../../state/actions';
import {useHistory,Link} from 'react-router-dom';
function ModalDK(props) {
  const dispatch = useDispatch();
  const history =useHistory();
  const [data,setData] = useState({
    name: "",
    email:"",
    password: ""
  })
  const handlerSignUp = () =>{
    dispatch(userSignUp(data));
  }
  return (
    <div className="modaldk">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-8">
              <div className="lg__item">
                <h1>Xin chào</h1>
                <h4>Đăng nhập hoặc Tạo tài khoản</h4>
                <div className="inputdn">
                  <input placeholder="Tên đăng nhập" onChange={e=>setData({...data,name:e.target.value})} type="text" />
                </div>
                <div className="inputdn">
                  <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})} type="text" />
                </div>
                <div className="inputdn">
                  <input placeholder="Mật khẩu" onChange={e=>setData({...data,password:e.target.value})} type="password" />
                </div>
                <br />
                <button onClick={handlerSignUp}>Tiếp tục</button>
                <br />
                
                <div className="bottom">
                <span>Đăng nhập bằng email</span> <br />
                  
                  <div className="list__ad">
                  <span className="or">Hoặc tiếp tục bằng</span> <br />
                    <img
                      src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                      alt="a"
                    />
                    <img
                      src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                      alt="A"
                    />
                    <img
                      src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png"
                      alt="A"
                    />
                    <br />
                    <a href="a">
                      Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img__back">
                <div className="lg__item">
                  <div className="img">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                      alt="a"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ModalDK;
