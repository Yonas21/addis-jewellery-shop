import LoginImage from "../assets/homepage/img/login.jpg";

function LoginPage() {
	return (
		<>
			{/* <!--================Home Banner Area =================--> */}
			{/* <section className="banner_area">
				<div className="banner_inner d-flex align-items-center">
					<div className="container">
						<div className="banner_content text-center">
							<h2>Login/Register</h2>
							<div className="page_link">
								<a href="/home">Home</a>
								<a href="/login">Login</a>
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
								<img
									className="img-fluid"
									src={LoginImage}
									alt=""
								/>
								<div className="hover">
									<h4>New to our website?</h4>
									<p>
										There are advances being made in science
										and technology everyday, and a good
										example of this is the
									</p>
									<a className="main_btn" href="/signup">
										Create an Account
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="login_form_inner">
								<h3>Log in to enter</h3>
								<form
									className="row login_form"
									method="post"
									id="contactForm"
									noValidate="novalidate"
								>
									<div className="col-md-12 form-group">
										<input
											type="text"
											className="form-control"
											id="username"
											name="username"
											placeholder="Username"
										/>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="password"
											className="form-control"
											id="psw"
											name="password"
											placeholder="Password"
											autoComplete="off"
										/>
									</div>

									<div className="col-md-12 form-group">
										<button
											type="submit"
											className="btn submit_btn"
										>
											Log In
										</button>
										<a href="#">Forgot Password?</a>
									</div>

									<div className="txt1 text-center p-t-54 p-b-20">
										<span>Or Sign Up Using</span>
									</div>

									<div className="flex-c-m">
										<a
											href="#"
											className="login100-social-item bg1"
										>
											<i className="fa fa-facebook"></i>
										</a>

										<a
											href="#"
											className="login100-social-item bg2"
										>
											<i className="fa fa-linkedin"></i>
										</a>

										<a
											href="#"
											className="login100-social-item bg3"
										>
											<i className="fa fa-google-plus"></i>
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default LoginPage;
