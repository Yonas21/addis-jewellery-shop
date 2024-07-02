function SpecialOrder() {
	return (
		<>
			<div className="clear"></div>
			<form action="">
				<div className="form-group">
					<h3 className="text-heading">Order Items</h3>
				</div>
				<div className="form-group">
					<label htmlFor="product_name" className="col-form-label">
						name
					</label>
					<input
						type="text"
						className="form-control"
						id="product_name"
						name="name"
						placeholder="enter the name"
					/>
				</div>

				<div className="form-group">
					<label
						htmlFor="product_quantity"
						className="col-form-label"
					>
						Quantity
					</label>
					<input
						type="text"
						className="form-control"
						name="quantity"
						id="product_quantity"
						placeholder="enter the quantity"
					/>
				</div>

				<div className="form-group">
					<label
						htmlFor="product_description"
						className="col-form-label"
					>
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="product_description"
						name="description"
						placeholder="enter the description"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="contact_no" className="col-form-label">
						Phone Number
					</label>
					<input
						type="text"
						className="form-control"
						name="phone_no"
						id="contact_no"
						placeholder="enter phone number."
					/>
				</div>

				<div className="form-group">
					<label htmlFor="product_image" className="col-form-label">
						Product Image
					</label>
					<input
						type="file"
						className="form-control"
						id="product_image"
						name="productImage"
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-success" type="submit">
						Success
					</button>
				</div>
			</form>
		</>
	);
}

export default SpecialOrder;
