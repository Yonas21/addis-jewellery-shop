// import { Link } from "react-router-dom"
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RegisterImage from "../assets/homepage/img/login.jpg";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { LoadingIcon } from "../components/LoadingIcon";


function RegisterPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true)
			await createUserWithEmailAndPassword(auth,email,password);
			toast.success("User Successfully Registered !!!", {
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

	console.log("password=====", password);
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
									src={RegisterImage}
									alt=""
								/>
								<div className="hover">
									<h4>New to our website?</h4>
									<p>
										There are advances being made in science
										and technology everyday, and a good
										example of this is the
									</p>
									<a className="main_btn" href="#">
										Create an Account
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="login_form_inner reg_form">
								<h3>Create an Account</h3>
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
											id="fname"
											name="firstName"
											placeholder="Fist Name"
											required
											value={firstName}
											onChange={(event) =>
												setFirstName(event.target.value)
											}
										/>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="text"
											className="form-control"
											required
											id="lname"
											name="lname"
											placeholder="Last Name"
											value={lastName}
											onChange={(event) =>
												setlastName(event.target.value)
											}
										/>
									</div>
									<div className="col-md-12 form-group">
										<input
											type="email"
											className="form-control"
											required
											id="email"
											name="email"
											placeholder="Email Address"
											value={email}
											onChange={(event) =>
												setEmail(event.target.value)
											}
										/>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="text"
											className="form-control"
											name="phoneNo"
											id="phone"
											required
											placeholder="Phone No."
											value={phoneNumber}
											onChange={(event) =>
												setPhoneNumber(
													event.target.value
												)
											}
										/>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="text"
											className="form-control"
											id="adress"
											name="Address"
											required
											placeholder="Address"
											value={address}
											onChange={(event) =>
												setAddress(event.target.value)
											}
										/>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="male"
											value="male"
											id="flexRadioDefault1"
											checked={gender === "male"}
											onChange={(event) =>
												setGender(event.target.value)
											}
										/>
										<label
											className="ml-4 form-check-label"
											htmlFor="male"
										>
											Male
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="female"
											value="female"
											id="flexRadioDefault2"
											checked={gender === "female"}
											onChange={(event) =>
												setGender(event.target.value)
											}
										/>
										<label
											className="ml-4 form-check-label"
											htmlFor="female"
										>
											Female
										</label>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="password"
											className="form-control"
											id="password"
											required
											name="password_1"
											placeholder="Password"
											value={password}
											onChange={(event) =>
												setPassword(
													event.target.value
												)
											}
										/>
									</div>

									<div className="col-md-12 form-group">
										<input
											type="password"
											className="form-control"
											id="confirm_password"
											name="confirm_password"
											placeholder="Confirm Password"
											autoComplete="off"
											required
											value={confirmPassword}
											onChange={(event) =>
												setConfirmPassword(
													event.target.value
												)
											}
										/>
									</div>

									<div className="col-md-12 form-group">
										<button
											type="button"
											className="btn submit_btn"
											onClick={handleRegister}
										>
											{isLoading ? <LoadingIcon size={20} className="" />:`Register`}
										</button>
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

export default RegisterPage;
