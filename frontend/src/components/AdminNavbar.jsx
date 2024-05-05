import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
    {/* Navbar Start */}
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
<a
  href="/"
  className="navbar-brand d-flex align-items-center px-4 px-lg-5"
>
  <h2 className="m-0 text-secondary">
    <i className="fa fa-book me-3" />
    ICTAK-Internship Portal
  </h2>
</a>
<button
  type="button"
  className="navbar-toggler me-4"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
>
  <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarCollapse">
  <div className="navbar-nav ms-auto p-4 p-lg-0">
    <a href="/" className="nav-item nav-link active">
      Home
    </a>
    <a href="/about" className="nav-item nav-link">
      About
    </a>
    <a href="/courses" className="nav-item nav-link">
      Courses
    </a>
    <a href="/contact" className="nav-item nav-link">
      Contact
    </a>
  </div>
  <a href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
    Login
    <i className="fa fa-arrow-right ms-3" />
  </a>
</div>
</nav>
{/* Navbar End */}
</div>
  )
}

export default AdminNavbar