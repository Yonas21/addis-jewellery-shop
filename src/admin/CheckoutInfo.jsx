
function CheckoutInfo() {
  return (
    <>
    <div>
  <table className="table table-striped" style={{width: "80%"}}  >
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User First Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Product Name</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr  className='*ngFor="let checkout of checkoutInfoArray"'>
        <th scope="row">{`{count}`}</th>
        <td>{`{checkout.firstName}`}</td>
        <td>{`{checkout.email}`}</td>
        <td>{`{checkout.phone}`}</td>
        <td>{`{checkout.productName}`}</td>
        <td><button className="btn btn-danger" >Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>



    </>
  )
}

export default CheckoutInfo