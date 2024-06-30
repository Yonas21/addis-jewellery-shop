// import { Link } from "react-router-dom"
import RegisterImage from "../assets/homepage/img/login.jpg";


function RegisterPage() {
  return (
    <>
    {/* <!--================Home Banner Area =================--> */}
{/* <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
        <div className="container">
            <div className="banner_content text-center">
                <h2>Login/Register</h2>
                <div className="page_link">
                    <Link to="/home">Home</Link>
                    <Link to="/signup">Register</Link>
                </div>
            </div>
        </div>
    </div>
</section> */}
{/* <!--================End Home Banner Area =================--> */}

{/* <!--================Login Box Area =================--> */}
<section className="login_box_area p_120">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="login_box_img">
                    <img className="img-fluid"  src={RegisterImage} alt="" />
                    <div className="hover">
                        <h4>New to our website?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this
                            is the</p>
                        <a className="main_btn" href="#">Create an Account</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="login_form_inner reg_form">
                    <h3>Create an Account</h3>
                    <form className="row login_form"  method="post" id="contactForm"
                        noValidate="novalidate"  >
                        <div className="col-md-12 form-group">
                            <input type="text" className="form-control" id="fname" name="firstName" placeholder="first name" />
                        </div>

                        

                        <div className="col-md-12 form-group">
                            <input type="text" className="form-control" id="lname" name="lname" placeholder="last name" />
                        </div>
                        <div className="col-md-12 form-group">
                            <input type="email" className="form-control" id="email" name="email"
                                placeholder="Email Address" />
                        </div>

                        

                        <div className="col-md-12 form-group">
                            <input type="text" className="form-control" name="phoneNo" id="phone"  placeholder="Phone No." />
                        </div>

                       
                        <div className="col-md-12 form-group">
                            <input type="date" className="form-control" id="birth_date" name="birth_date" placeholder="Birth Date" />
                        </div>
                        <div className="col-md-12 form-group">
                            <input type="text" className="form-control" id="adress" name="Address" placeholder="Address" />
                        </div>
                        <div className="col-md-12 form-group form-inline" >
                            <input type="checkbox" className="form-control" value="Male"  />Male
                            <input type="checkbox" className="form-control" value="FeMale" />FeMale
                        </div>

                        <div className="col-md-12 form-group" >
                            <input type="password" className="form-control" id="password" name="password"
                                placeholder="Password" autoComplete="off" />
                        </div>

                        

                        <div className="col-md-12 form-group" >
                            <input type="password" className="form-control" id="confirm_password" name="confirm_password"
                                   placeholder="Confirm Password" autoComplete="off" />
                        </div>

                        
                        <div className="col-md-12 form-group">
                            <button type="submit" className="btn submit_btn">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default RegisterPage