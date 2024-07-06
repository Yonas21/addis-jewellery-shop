
function Orders() {
  return (
    <>
    <div>
    <table className="table table-striped" style={{width: "80%"}}>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Image</th>
        </tr>
        </thead>
        <tbody>
        <tr className='*ngFor="let order of OrderArray"'>
            <th scope="row">1</th>
            <td>{`{order.name}`}</td>
            <td>{`{order.quantity}`}</td>
            <td>{`{order.description}`}</td>
            <td>{`{order.phone}`}</td>
            <td><img src='' width="50%" height="40%" /></td>
        </tr>
        </tbody>
    </table>
</div>


    </>
  )
}

export default Orders