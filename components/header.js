import Link from "next/link";

const Header = () => {
  return (
    <>
    
    <section id="topbar" className="topbar d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <p className="top-header-heading">
            Every dollar counts! Support our critical work by making a
            tax-deductible contribution today - - &gt;
          </p>
        </div>
        <div className="col-md-2">
          <h4 className="donate-button">
            <a href="#">
              <strong>
                <u>DONATE NOW</u>
              </strong>
            </a>{" "}
          </h4>
        </div>
      </div>
    </div>
  </section>



  <section id="hero" className="hero">
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/logo.png" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">The Campaign</Link>
            </li>
            <li>
              <Link href="/Events">Events</Link>
            </li>
            <li>
            <Link href="#">Support</Link>
            </li>
            <li>
            <Link href="/Contact_us">Contact</Link>
            </li>
            <li>
              <div className="input-group">
                <input
                  className="form-control border-end-0 border rounded-pill"
                  type="search"
                  defaultValue="Search"
                />
              </div>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </div>
    </header>
    {/* End Header */}
    {/* End Header */}
    </section>
   
    </>
  );
};

export default Header;
