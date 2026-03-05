import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black py-3 fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-3xl text-info ms-3" to="#">Abir's Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-xl" to="/#top">About Myself</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-xl" to="/#education">Education</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  text-xl" to="/#experience">Work Experience</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link  text-xl" to="/#skills">Skills</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-xl " to="/resume">My Resume</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-xl" to="/contact">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;