
function Add() {
	return (
		<>
			<form action="">
				<div className="form-group col-lg-12">
					<h6 className="text-heading">Add Product</h6>
				</div>
				<div className="form-group">
					<label htmlFor="name" className="col-form-label">
						name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Price
					</label>
					<input
						type="text"
						className="form-control"
						id="price"
						name="price"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="color" className="col-form-label">
						Color
					</label>
					<input
						type="text"
						className="form-control"
						id="color"
						name="color"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="photo" className="col-form-label">
						Enter Image
					</label>
					<input
						type="file"
						className="form-control"
						id="photo"
						name="productImage"
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-primary" type="submit">
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export default Add;
