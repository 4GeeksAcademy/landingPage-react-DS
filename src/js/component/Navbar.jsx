import React from "react";

const Navbar = () => {
    return (
        <div className="container-nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">

              <div className="container">

                <a className="navbar-brand" href="#">Start Bootstrap</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="navbar-right">
                    <ul className="navbar-nav">

                      <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>

                    </ul>

                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;