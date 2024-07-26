import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100" style={{marginLeft:"-10%"}}>
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-gra-01 d-flex sticky-top" style={{ height: "100vh" }}>
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5">Admin<span className="d-none d-md-inline">Addis</span></span>
            </a>
            <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <a href="/admin/dashboard" className="text-secondary nav-link px-sm-0 px-2">
                  <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/admin/orders" className="text-secondary nav-link px-sm-0 px-2">
                  <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="/admin/products" className="text-secondary nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Products</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-secondary text-small shadow" aria-labelledby="dropdown">
                  <li><a className="dropdown-item" href="/admin/products">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/admin/add-product">Add Product</a></li>
                  <li><hr className="dropdown-divider" /></li>
                </ul>
              </li>
              <li>
                <a href="/admin/checkoutInfo" className="text-secondary nav-link px-sm-0 px-2">
                  <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Checkout Info</span>
                </a>
              </li>
            </ul>
            <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                <span className="d-none d-sm-inline mx-1">Addis A</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column h-100">
          <main className="row flex-grow-1 overflow-auto">
            <div className="col-12 pt-4 px-4" >
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
