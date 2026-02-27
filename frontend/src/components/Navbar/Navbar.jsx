import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = () => {

  const { getTotalCartAmount, token, setToken, setShowLogin, food_list, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSearch = food_list.filter(item =>
    searchQuery && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/menu?search=${searchQuery.trim()}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return "active";
    if (path === '/menu' && location.pathname.startsWith('/menu')) return "active";
    if (path === '/mobile-app' && location.pathname === '/mobile-app') return "active";
    if (path === '/contact-us' && location.pathname === '/contact-us') return "active";
    return "";
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" className={isActive('/')}>home</Link>
        <Link to="/menu" className={isActive('/menu')}>menu</Link>
        <Link to="/mobile-app" className={isActive('/mobile-app')}>mobile app</Link>
        <Link to="/contact-us" className={isActive('/contact-us')}>contact us</Link>
      </ul>
      <div className="navbar-right">
        <div className={`navbar-search-container ${showSearch ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Search food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <img src={assets.search_icon} onClick={() => setShowSearch(!showSearch)} alt="" />

          {searchQuery && (
            <div className="search-results-dropdown">
              {filteredSearch.slice(0, 5).map((item, index) => (
                <div key={index} className="search-result-item" onClick={() => {
                  navigate(`/menu?search=${item.name}`);
                  setSearchQuery("");
                  setShowSearch(false);
                }}>
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
              {filteredSearch.length > 5 && (
                <div className="search-view-all" onClick={() => {
                  navigate(`/menu?search=${searchQuery}`);
                  setSearchQuery("");
                  setShowSearch(false);
                }}>
                  View all ({filteredSearch.length} results)
                </div>
              )}
              {filteredSearch.length === 0 && (
                <div className="no-search-results">No dishes found</div>
              )}
            </div>
          )}
        </div>
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li>
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
