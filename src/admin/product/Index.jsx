
function Index() {
  return (
    <>
    <table className="table table-striped" style={{width: "80%"}}>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">Image</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr className='*ngFor="let product of products"'>
            <th scope="row">1</th>
            <td>{`{product.name}`}</td>
            <td>{`{product.price}`}</td>
            <td>{`{product.productImage}`}</td>
            <td><button className="btn btn-primary" >Update</button></td>
            <td><button className="btn btn-danger" >Delete</button></td>
        </tr>
        </tbody>
    </table>

    </>
  )
}

export default Index