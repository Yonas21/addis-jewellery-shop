
function Update() {
  return (
    <>
    <form action="" >
    <div className="form-group">
        <h6 className="text-heading">Update Product</h6>
    </div>
    <div className="form-group">
        <label htmlFor="name" className="col-form-label">name</label>
        <input type="text" className="form-control" id="name" name="newName" value={`{product.name}`} />
    </div>


    <div className="form-group">
        <label htmlFor="price" className="col-form-label">Price</label>
        <input type="text" className="form-control" id="price" name="price"  value={`{product.price}`} />
    </div>


    <div className="form-group">
        <label htmlFor="photo" className="col-form-label">Enter Image</label>
        <input type="file" className="form-control" id="photo"  name="productImage" />
    </div>

    <div className="form-group">
        <button className="btn btn-primary" type = "submit" >Submit</button>
    </div>
</form>

    </>
  )
}

export default Update