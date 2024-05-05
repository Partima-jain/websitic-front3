import logo2 from '../../assets/Logo2.png'
import search from '../../assets/search.png'
import LoginPage from '../../Components/LoginPage'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className='headerlist'>
        <li className='logo1'><i className="fa-brands fa-linkedin"></i></li>
        <li className='logo'><i className="fa-brands fa-square-twitter"></i></li>
        <li className='logo'><i className="fa-brands fa-google-plus"></i></li>
        <li className='logo'><i className="fa-brands fa-facebook"></i></li>
        <li className='logo'><i className="fa-brands fa-instagram"></i></li>
        <li className="right-align1 with-line"><a href='../../Components/LoginPage'  style={{ textDecoration: 'none' }}><i style={{ color: 'white' }}></i> JOB SEEKERS LOGIN</a></li>
        <li className="right-align">EMPLOYER LOGIN</li>
        <li className="right-align">PARTNERS LOGIN</li>
        <li className="right-align"><a href="mailto:business@ibasearch.com"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-envelope" style={{ color: 'white' }}></i>  business@ibasearch.com</a></li>
        <li className="right-align2"><a href="tel: +91 8802756666, 8802706666"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-phone" style={{ color: 'white' }}></i> +91 8802756666, +91 8802706666</a></li>
      </ul>
      <div className="nav-logo">
        <img src={logo2} className='nav-img' alt="Logo" />
      </div>
      <div className="filter-container">
        <span className="filter-text">Filter by:</span>
        <select className="filter-dropdown">
          <option value="job">Job</option>
          <option value="event">Event</option>
          <option value="Editorial">Editorial</option>
          <option value="Courses">Courses</option>
        </select>
      </div>
      

      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search Item......" />
        <button className='searchbtn' id="search-button">
          <a><i className="fa-solid fa-magnifying-glass"></i></a>
        </button>
      </div>
      

      <ul className="nav-menu">
        <li>HOME</li>
        
        <li class="dropdown-parent">ABOUT US
          <ul className="dropdown">
            <li>CHAIRMAN</li>
            <li>BOARD OF DIRECTORS</li>
            <li>BOARD OF ADVISORS</li>
            <li>PANEL OF CONSULTANTS</li>
            <li>STRATEGIC BUSINESS PARTNERS</li>
            <li>FRANCHISE PARTNER</li>
          </ul>
        </li>
        <li class="dropdown-parent">LUXURY BUSINESS CLUBS
          <ul className="dropdown">
            <li>ELITE BUSINESS CLUB	</li>
            <li>GLOBAL BUSINESS NETWORK CLUB	</li>
            <li>LUXURY BUSINESS NETWORK CLUB	</li>
            <li>DIVERSITY  BUSINESS NETWORK CLUB</li>
            <li>EVENTS & ENTERTAINMENT</li>
          </ul>
        </li>
        <li class="dropdown-parent">EVENTS & ENTERTAINMENT 
          <ul className="dropdown">
            <li>SPORTS</li>
            <li>MUSIC CONCERTS</li>
            <li>WORKSHOPS</li>
            <li>FORUMS</li>
            <li>AUCTIONS & ART FAIRS</li>
          </ul>
        </li>
        <li class="dropdown-parent">BUSINESS OPPORTUNITIES
        </li>
        <li class="dropdown-parent">LUXURY MARKETPLACE
          <ul className="dropdown">
            <li>LUXURY HOSPITALITY, TRAVEL & HOLIDAYS</li>
            <li>LUXURY BUSINESS TRADING</li>
            <li>LUXURY REAL ESTATE TRADING</li>
            <li>HEALTHCARE & WELLNESS</li>
          </ul>
        </li>
        <li>GLOBAL SEARCH COMPANY</li>
        <li class="dropdown-parent">ADVISORY & CONSULTING
          <ul className="dropdown">
            <li>BUSINESS & MARKETING CONSULTING</li>
            <li>HR CONSULTING & TRANSFORMATION</li>
            <li>IT SUPPORT SONSULTING</li>
          </ul>

        </li>
        <li>COACHING & MENTORSHIP</li>
        <li>ASSESSMENT & REPORTS</li>
        <li>EDITORIAL</li>
        <li>FAQS</li>
        <li>CONTACT</li>
      </ul>



    </div>
  )
}

export default Navbar