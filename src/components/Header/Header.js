import React from 'react';
import { Link } from 'react-router-dom';
import('./Header.css')
const Header = () => {
      return (
            <div className='header'>
                  <div>
                        <Link to="/home">Home</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/dashbord">Dashboard</Link>
                        <Link to="/blog">Blogs</Link>
                        <Link to="/about">About</Link>
                        
                  </div>
                  
            </div>
      );
};

export default Header;