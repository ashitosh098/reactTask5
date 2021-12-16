import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <span
          className="sidebar-brand d-flex align-items-center justify-content-center"
         
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </span>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <Link to="/userlist"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Users</span>
          </Link>
         
          
        </li>

        <li className="nav-item">
          <Link to="/productlist"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Products</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div className="sidebar-card">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt=""
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <span
            className="btn btn-success btn-sm"
            
          >
            Upgrade to Pro!
          </span>
        </div>
      </ul>
    </>
  );
}
