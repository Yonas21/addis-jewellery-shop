import InstagramItem1 from "../assets/homepage/img/instagram/Image-01.jpg";
import InstagramItem2 from "../assets/homepage/img/instagram/Image-02.jpg";
import InstagramItem3 from "../assets/homepage/img/instagram/Image-03.jpg";
import InstagramItem4 from "../assets/homepage/img/instagram/Image-04.jpg";
import InstagramItem5 from "../assets/homepage/img/instagram/Image-05.jpg";
import InstagramItem6 from "../assets/homepage/img/instagram/Image-06.jpg";
import InstagramItem7 from "../assets/homepage/img/instagram/Image-07.jpg";
import InstagramItem8 from "../assets/homepage/img/instagram/Image-08.jpg";

function Footer() {
  return (
    <>
    <footer className="footer-area section_gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                    <h6 className="footer_title">About Us</h6>
                    <p>We are Emart Ethiopian Shops,we allows the users to buy and book Goods Online.</p>
                    <p>emartEthiopia@gmail.com</p>
                    <p>+251936972697</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                    <h6 className="footer_title">Newsletter</h6>
                    <p>Stay updated with our latest trends</p>
                    <div id="mc_embed_signup">
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" className="subscribe_form relative">
                            <div className="input-group d-flex flex-row">
                                <input name="EMAIL" placeholder="Email Address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Email Address '"
                                       required="" type="email" />
                                <button className="btn sub-btn">
                                    <span className="fa fa-arrow-right"></span>
                                </button>
                            </div>
                            <div className="mt-10 info"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget instafeed">
                    <h6 className="footer_title">Instagram Feed</h6>
                    <ul className="list instafeed d-flex flex-wrap">
                        <li>
                            <img src={InstagramItem1} alt="" />
                        </li>
                        <li>
                            <img src= { InstagramItem2} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem3} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem4} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem5} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem6} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem7} alt="" />
                        </li>
                        <li>
                            <img src={InstagramItem8} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget f_social_wd">
                    <h6 className="footer_title">Follow Us</h6>
                    <p>Let us be social</p>
                    <div className="f_social">
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-12 footer-text text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
            </p>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer