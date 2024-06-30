import { useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();
	return (
		<>
			<div className="form-title my-5">
				<h1>Page Not Found</h1>
			</div>
			{/* <!-- Page not Found --> */}
			<div className="page-404-form text-center">
				<div className="toggle">
					<a href="#">
						<i className="fa fa-times white-color"></i>
					</a>
				</div>
				<div className="form">
					<h1>404</h1>
					<h3>{`Sorry we couldn't find this page`}</h3>
					<p>This page you are looking for does not exist</p>

					<button
						className="btn btn-outline-primary"
						onClick={() => navigate(-1)}
					>
						Back to Home
					</button>

					<div className="ContactSupport">
						<a href="javascript:void(0)">Contact Support</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ErrorPage;
