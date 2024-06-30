
function Cart() {
  return (
    <>
    <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
      <div className="container">
        <div className="banner_content text-center">
          <h2>Shopping Cart</h2>
          <div className="page_link">
            <a href="/home">Home</a>
            <a href="/cart">Cart</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================End Home Banner Area =================--> */}

  {/* <!--================Cart Area =================--> */}
  <section className="cart_area">
    <div className="container">
      <div className="cart_inner">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
                {/* loop over rows */}
              <tr>
                <td>
                  <div className="media">
                    <div className="d-flex">
                      <img src='' alt="{{product.name}}" />
                    </div>
                    <div className="media-body">
                      <p>Name</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>Price: 23</h5>
                </td>
                <td>
                  <div className="product_count">
                    <input type="text" name="qty" id="qty" maxLength="12" value="1" title="Quantity:"
                      className="input-text qty" />
                    <button
                      className="increase items-count" type="button">
                      <i className="fa fa-chevron-up"></i>
                    </button>
                    <button
                      className="reduced items-count" type="button">
                      <i className="fa fa-chevron-down"></i>
                    </button>
                  </div>
                </td>
                <td>
                  <h5>
                    {/* {{product.price * count}} */}
                    price * count
                    </h5>
                </td>
              </tr>
              <tr className="bottom_button">
                <td>

                </td>
                <td>

                </td>
                <td>
                  <div className="cupon_text">
                    <input type="text" placeholder="Coupon Code" />
                    <a className="main_btn" href="#">Apply</a>
                    <a className="gray_btn" href="#">Close Coupon</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>

                </td>
                <td>

                </td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td>
                  <h5>
                    {/* {{sum}} */}
                    sum
                    </h5>
                </td>
              </tr>
              <tr className="shipping_area">
                <td>

                </td>
                <td>

                </td>
                <td>
                  <h5>Shipping</h5>
                </td>
                <td>
                  <div className="shipping_box">
                    <ul className="list">
                      <li>
                        <a href="#">Flat Rate: $5.00</a>
                      </li>
                      <li>
                        <a href="#">Free Shipping</a>
                      </li>
                      <li>
                        <a href="#">Flat Rate: $10.00</a>
                      </li>
                      <li className="active">
                        <a href="#">Local Delivery: $2.00</a>
                      </li>
                    </ul>
                    <h6>Calculate Shipping
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </h6>
                    <select className="shipping_select">
                      <option value="1">Ethiopia</option>
                      <option value="2">Kenya</option>
                      <option value="4">other</option>
                    </select>
                    <select className="shipping_select">
                      <option value="1">Addis Ababa</option>
                      <option value="2">Jimma</option>
                      <option value="4">Bahir Dar</option>
                    </select>
                    <input type="text" placeholder="Postcode/Zipcode" />
                    <a className="gray_btn">Update Details</a>
                  </div>
                </td>
              </tr>
              <tr className="out_button_area">
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                  <div className="checkout_btn_inner">
                    <a className="gray_btn" to="/product-category">Continue Shopping</a>
                    <a className="main_btn text-white ml-5" >Proceed to checkout</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
{/* //   <!--================End Cart Area =================--> */}

{/* //   <!--================ Subscription Area ================--> */}
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
              <input type="email" name="EMAIL" placeholder="Email address" onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Email address'" required="" />
              {/* <!-- <div style="position: absolute; left: -5000px;">
									<input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="">
								</div> --> */}
              <button type="submit" className="newsl-btn">Get Started</button>
              <div className="info"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Cart