import React from 'react';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__center">
        <div className="footer__top">
          <div className="row">
            <div className="co-lg-11">
              <div className="ftt__item">
                <div className="fft__chil">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png"
                    alt="a"
                  />
                </div>
                <div className="fft__chil">
                  <h3>Đăng ký nhận bản tin Tiki</h3>
                  <h5>
                    Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
                  </h5>
                </div>
                <div className="fft__chil">
                  <input placeholder="Địa chỉ email của bạn" type="text" />
                  <a href="s">Đăng ký</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__cen1">
          <div className="row">
            <div className="col-lg-3">
              <ul className="list">
                <li className="big__title">HỖ TRỢ KHÁCH HÀNG</li>
                <li>
                  <span className="hl">Hotline chăm sóc khách hàng: 1900-6035</span>
                  <span>(1000đ/phút , 8-21h kể cả T7, CN)</span>
                </li>
                <li>Các câu hỏi thường gặp</li>
                <li>Gửi yêu cầu hỗ trợ</li>
                <li>Hướng dẫn đặt hàng</li>
                <li>Phương thức vận chuyển</li>
                <li>Chính sách đổi trả</li>
                <li>Hướng dẫn trả góp</li>
                <li>Chính sách hàng nhập khẩu</li>
                <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
                <li>Báo lỗi bảo mật: security@tiki.vn</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list">
                <li className="big__title">VỀ TIKI</li>
                <li>Giới thiệu Tiki</li>
                <li>Tuyển Dụng</li>
                <li>Chính sách bảo mật thanh toán</li>
                <li>Chính sách bảo mật thông tin cá nhân</li>
                <li>Chính sách giải quyết khiếu nại</li>
                <li>Điều khoản sử dụng</li>
                <li>Giới thiệu Tiki Xu</li>
                <li>Bán hàng doanh nghiệp</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list">
                <li className="big__title">HỢP TÁC VÀ LIÊN KẾT</li>
                <li>Quy chế hoạt động Sàn GDTMĐT</li>
                <li>Bán hàng cùng Tiki</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list">
                <li className="big__title">KẾT NỐI VỚI CHÚNG TÔI</li>
                <li>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg"
                    alt="s"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg"
                    alt="d"
                  />
                  
                </li>
                <li className="big__title">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</li>
                <li className="img__ll">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                    alt="a"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                    alt="a"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__cen2">
          <div className="col-lg-5">
            <p>
              <b className="bs">Địa chỉ văn phòng:</b>52 Út Tịch, phường 4, quận Tân
              Bình, thành phố Hồ Chí Minh Tiki nhận đặt hàng trực tuyến và giao
              hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng
              hoặc trung tâm xử lý đơn hàng
            </p>
          </div>
        </div>
        <div className="footer__bot">
          <div className="bot__row">
            <div className="bot__item">
              <h4>© 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</h4>
              
              <span>
                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch
                và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
              </span>
            </div>
            <div className="bot__item">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                alt="a"
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                alt="a"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
