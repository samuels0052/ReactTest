function Nav() {
    return (
        <div className="container-fluid sticky-top" id="navbar-wrapper">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#top"><span id="brand_span">Brand</span></a>
                    <button className="navbar-toggler poop" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-justify"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#page1"><i className="bi bi-laptop-fill"></i><span> One</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#page2"><i className="bi bi-telephone-fill"></i><span> Two</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;