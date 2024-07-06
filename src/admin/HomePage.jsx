
function HomePage() {
  return (
    <>
    <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
                <div className="col pt-4">
                    <h3>Vertical Sidebar that switches to Horizontal Navbar</h3>
                    <p className="lead">{`An example multi-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single menu is be open at a time.`}</p>
                    <hr />
                    <h3>More content...</h3>
                    
                    <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colSpan="2">Larry the Bird</td>
                              <td>@twitter</td>
                              <td colSpan="2">Larry the Bird</td>
                              <td>@twitter</td>
                              <td colSpan="2">Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    
                </div>
            </main>
            <footer className="row bg-light py-4 mt-auto">
                <div className="col"> Footer content here... </div>
            </footer>
        </div>
    </>
  )
}

export default HomePage