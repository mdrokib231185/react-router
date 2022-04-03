import React from 'react';
// import { Link } from 'react-router-dom';
import('./Header.css')
const Header = () => {
      return (
            <div className='header'>
                  <div>
                        <a href="/home">Home</a>
                        <a href="/reviews">Reviews</a>
                        <a href="/dashbord">Dashboard</a>
                        <a href="/blog">Blogs</a>
                        <a href="/about">About</a>
                  </div>
                  
            </div>
      );
};

export default Header;