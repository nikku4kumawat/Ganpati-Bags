import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* TOP HEADER */}

      {/* <div className="top-header">
        <div className="top-left">
          <a href="tel:+919638666607" className="top-link">
              📞 +91 9638666607
           </a>
          <a href="mailto:care@ganpatibags.com" className="top-link">
              ✉ care@ganpatibags.com
           </a>
          <span>|</span>
          <span>🕘 9:00 AM to 7:00 PM</span>
        </div>

        <div className="top-right">
          <button>Get it on Play Store</button>
          <button>Download on App Store</button>
        </div>
      </div> */}
      <div className="top-header">
  <div className="top-left">
    <a href="tel:+919638666607" className="top-link">
      📞 +91 9638666607
    </a>
    <a href="mailto:care@ganpatibags.com" className="top-link">
      ✉ care@ganpatibags.com
    </a>
    <span>|</span>
    <span>🕘 9:00 AM to 7:00 PM</span>
  </div>
 <div className="top-right">

  {/* FACEBOOK */}

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon facebook"
  >
    <FaFacebookF />
  </a>

  {/* LINKEDIN */}

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon linkedin"
  >
    <FaLinkedinIn />
  </a>

  {/* X / TWITTER */}

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon twitter"
  >
    <FaXTwitter />
  </a>

</div>

</div>


      {/* MAIN NAVBAR */}

      <div className="navbar">
        {/* LOGO */}

        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-title">Ganpati 
          <span>Bags</span>
        </div>

        {/* SEARCH */}

        <div className="search-section">
          <input type="text" placeholder="What are you looking for?" />
          <button>🔍</button>
        </div>

        {/* RIGHT ICONS */}

        <div className="nav-icons">
          <span>LOGIN </span>
          <span>♡</span>
          <span>🛒</span>
        </div>
      </div>


      {/* MENU BAR */}

      <div className="menu-bar">
        <ul>

           {/* CONTACT */}

          <li className="home-item">
            <Link to="/">Home</Link>
          </li>

           {/* ABOUT */}

          <li className="about-item">
            <Link to="/about">About Us 
            {/* <span className="dp">v</span> */}
            </Link>

            <div className="about-dropdown">
              <Link to="/about/testimonial">
                Testimonial
              </Link>

              <Link to="/about/company">
                About The Company
             </Link>

            </div>
          </li>

          {/* PRODUCT RANGE */}

          <li className="menu-item">
             <Link to="/products">Our Product
              {/* <span className="dp">v</span> */}
               </Link>

            <div className="dropdown">
              <div className="dropdown-column">
                <h3>Home And Kitchen</h3>

                <p>Wall Hanger Hooks</p>
                <p>Transparent Wall Hook</p>
                <p>PVC Wall Hook</p>
                <p>Nice Water Bottle</p>
                <p>Kitchen Accessories</p>
              </div>

              <div className="dropdown-column">
                <h3>Storage Bag</h3>

                <p>Blue Saree Cover</p>
                <p>Heavy Saree Cover</p>
                <p>Quilt Storage Bag</p>
                <p>Large Saree Cover</p>
              </div>

              <div className="dropdown-column">
                <h3>Saree Cover</h3>

                <p>Metallic Printed Cover</p>
                <p>Single Saree Cover</p>
                <p>3 Piece Saree Cover</p>
                <p>Organizer Bag</p>
              </div>

              <div className="dropdown-column">
                <h3>Kitchen Tools</h3>

                <p>Glass Oil Spray</p>
                <p>Oil Dispenser</p>
                <p>Cool Cup Bottle</p>
                <p>Silicon Brush</p>
              </div>
            </div>
          </li>

         

          {/* CONTACT */}

          <li className="contact-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;