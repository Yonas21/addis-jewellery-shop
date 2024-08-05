import { Link } from "react-router-dom"

function Wishlist() {
  return (
    <>
    
{/* <!--================Home Banner Area =================--> */}
<section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
        <div className="container">
            <div className="banner_content text-center">
                <h2>Shop Category Page</h2>
                <div className="page_link">
                    <Link to="/home">Home</Link>
                    <Link to="/product-category">Category</Link>
                    <Link to="/product-category">Women Fashion</Link>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--================End Home Banner Area =================--> */}

{/* <!--================Category Product Area =================--> */}
<section className="cat_product_area section_gap">
    <div className="container-fluid">
        <div className="row flex-row-reverse">
            <div className="col-lg-9">
                <div className="product_top_bar">
                    <div className="left_dorp">
                        <select className="sorting">
                            <option value="1">Default sorting</option>
                            <option value="2">Default sorting 01</option>
                            <option value="4">Default sorting 02</option>
                        </select>
                        <select className="show">
                            <option value="1">Show 12</option>
                            <option value="2">Show 14</option>
                            <option value="4">Show 16</option>
                        </select>
                    </div>
                    <div className="right_page ml-auto">
                        <nav className="cat_page" aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item blank">
                                    <a className="page-link" href="#">...</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">6</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <section className="feature_products">
                <h3 className="text-heading">My Wishes</h3>
                <div className="card single_product" style={{width: "25rem"}} >
                    <img className="card-img-top" src="things.productImage"  alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{`wishlist title`}</h5>
                        <p className="card-text"><span className="text-info">Price</span> {23}</p>
                        <a href="#"> <i className="fa fa-cart-plus"></i></a>
                    </div>
                </div>
            </section>
        </div>

        <div className="row">
            <nav className="cat_page mx-auto" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">01</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item blank">
                        <a className="page-link" href="#">...</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">09</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</section>
{/* <!--================End Category Product Area =================--> */}

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
                    <form target="_blank" noValidate
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                          method="get" className="subscription relative">
                        <input type="email" name="EMAIL" placeholder="Email address" onFocus={()=>{}}
                               onBlur="this.placeholder = 'Email address'" required="" />
                        <button type="submit" className="newsl-btn">Get Started</button>
                        <div className="info"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--================ End Subscription Area ================--> */}

    </>
  )
}

export default Wishlist