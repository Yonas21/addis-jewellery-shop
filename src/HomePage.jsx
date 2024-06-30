import React from 'react'
import Item1 from './assets/homepage/img/clients-logo/c-logo-1.png';
import Item2 from './assets/homepage/img/clients-logo/c-logo-2.png';
import Item3 from './assets/homepage/img/clients-logo/c-logo-3.png';
import Item4 from './assets/homepage/img/clients-logo/c-logo-4.png';
import Item5 from './assets/homepage/img/clients-logo/c-logo-5.png';

function HomePage() {
  return (
    <>
    <section className="container-fluid home_banner_area">
    <div className="overlay"></div>
    <div className="banner_inner d-flex align-items-center">
        <div className="container">
            <div className="banner_content row">
                <div className="offset-lg-2 col-lg-8">
                    <h3>Fashion for
                        <br />Upcoming Winter</h3>
                    <p>Buy or wish the items You want in this cart and make it happen in the future.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--================End Home Banner Area =================--> */}

{/* <!--================Hot Deals Area =================--> */}
<section className="hot_deals_area section_gap">
    <div className="container-fluid">
        <h3 className="text-heading">Hot Deals of this Month</h3>
        <div className="row">
                    <div className="card single_product" style={{width: "25rem"}} >
                        <div >
                            <img className="card-img-top" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Gold Chain</h5>
                                <p className="card-text"><span className="text-info">Price</span> </p>
                                <a style={{marginRight: "30px"}} > <i className="fa fa-heart"></i></a>
                                <a> <i className="fa fa-shopping-cart" style={{marginRight: "30px"}} ></i></a>
                                <a><i className="fa fa-check-square" ></i></a>
                            </div>
                        </div>

                    </div>
                    <a className="hot_deal_link" href="#"></a>
                </div>
            </div>
</section>
{/* <!--================End Hot Deals Area =================--> */}

{/* <!--================Clients Logo Area =================--> */}
<section className="clients_logo_area">
    <div className="container-fluid">
        <div className="clients_slider owl-carousel">
            <div className="item">
                <img src={Item1} alt="" />
            </div>
            <div className="item">
                <img src={Item2} alt="" />
            </div>
            <div className="item">
                <img src={Item3} alt="" />
            </div>
            <div className="item">
                <img src={Item4} alt="" />
            </div>
            <div className="item">
                <img src={Item5} alt="" />
            </div>
        </div>
    </div>
</section>
{/* <!--================End Clients Logo Area =================--> */}

{/* <!--================Feature Product Area =================--> */}
<section className="feature_products">
    <h3 className="text-heading">Featured Products</h3>
    <div className="card single_product" style={{width: "25rem"}} >
        <img className="card-img-top"  alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Ladies Wear</h5>
            <p className="card-text"><span className="text-info">Price</span> 23</p>
            <a style={{marginRight: "30px"}} > <i className="fa fa-heart"></i></a>
            <a > <i className="fa fa-shopping-cart" style={{marginRight: "30px"}} ></i></a>
            <a ><i className="fa fa-check-square" ></i></a>
        </div>
    </div>
</section>
{/* // <!--================End Feature Product Area =================--> */}
<div className="clear"> </div>
{/* <!--================ Subscription Area ================--> */}
<section className="subscription-area section_gap">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-title text-center">
                    <h2>Subscribe for Our Newsletter</h2>
                    <span>We won’t send any kind of spam</span>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div id="mc_embed_signup">
                    <form target="_blank" noValidate action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                          method="get" className="subscription relative">
                        <input type="email" name="EMAIL" placeholder="Email address" 
                               required="" />
                        <button type="submit" className="newsl-btn" >Get Started</button>
                        <div className="info" ></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--================ Subscription Area ================--> */}


    </>
  )
}

export default HomePage