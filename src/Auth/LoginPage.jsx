/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import LoginImage from "../assets/homepage/img/login.jpg";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { LoadingIcon } from "../components/LoadingIcon";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function LoginPage() {
	const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true)
			await signInWithEmailAndPassword(auth, email, password);

			// Save additional user information in Firestore
			toast.success("User Successfully Logged IN !!!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
			setTimeout(() => {
				navigate("/")
			}, 1000);
			setError("");
			setIsLoading(false)
		} catch (error) {
			toast.error(error.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
			setError(error.message);
			setSuccess("");
			setIsLoading(true)
		}
	};


	const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = googleProvider.credentialFromResult(result);
	  const token = credential.accessToken;
	  localStorage.setItem("user_tokem", token)
	  // The signed-in user info.
      const user = result.user;
      console.log('User Info:', user);

	  toast.success("User Successfully Logged IN !!!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});

      // Redirect to homepage
      navigate('/');
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };
	return (
		<>
		<ToastContainer />
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
											value={email}
											onChange={event => setEmail(event.target.value)}
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
											value={password}
											onChange={event => setPassword(event.target.value)}
										/>
									</div>

									<div className="col-md-12 form-group">
										<button
											type="submit"
											className="btn submit_btn"
											onClick={handleLogin}
										>
											
											{isLoading ? <LoadingIcon size={20} className="" />:`Log In`}

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
											onClick={handleGoogleLogin}
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
