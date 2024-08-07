
function ContactUs() {
  return (
    <>
    

  {/* <!--================Home Banner Area =================--> */}
  <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
      <div className="container">
        <div className="banner_content text-center">
          <h2>Contact Us</h2>
          <div className="page_link">
            <a href="/home">Home</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================End Home Banner Area =================--> */}

  {/* <!--================Contact Area =================--> */}
  <section className="contact_area">
    <div className="container">
      <div id="mapBox" className="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom="13"
        data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia." data-mlat="40.701083"
        data-mlon="-74.1522848">
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="contact_info">
            <div className="info_item">
              <i className="lnr lnr-home"></i>
              <h6>Addis Ababa, Ethiopia</h6>
              <p>Amist Kilo</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-phone-handset"></i>
              <h6>
                <a href="#">09 (+251) 9865 562</a>
              </h6>
              <p>Mon to Fri 8am to 10 pm</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-envelope"></i>
              <h6>
                <a href="#">emart@gmail.com</a>
              </h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <form className="row contact_form" action="" method="post" id="contactForm"
            noValidate="novalidate">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows="1"
                  placeholder="Enter Message" ></textarea>
              </div>
            </div>
            <div className="col-md-12 text-right">
              <button type="submit" value="submit" className="btn submit_btn"
                      >Send Message</button>
            </div>
              
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================Contact Area =================--> */}


  {/* <!--================Contact Success and Error message Area =================--> */}

  {/* <!-- Modals error --> */}

  <div id="error" className="modal modal-message fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
          <h2>Sorry !</h2>
          <p> Something went wrong </p>
        </div>
      </div>
    </div>
  </div>
  {/* <!--================End Contact Success and Error message Area =================--> */}



    </>
  )
}

export default ContactUs