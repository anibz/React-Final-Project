import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navigation-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link"></Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutpage" className="nav-link">
              ჩვენ შესახებ
            </Link>
          </li>
          <li>
            <Link to="/bachelor" className="nav-link">
              AI ბაკალავრის პროგრამა
            </Link>
          </li>
          <li>
            <Link to="/success" className="nav-link">
              წარმატების ისტორიები
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              კონტაქტი
            </Link>
          </li>
          <li>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              ბლოგი
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
