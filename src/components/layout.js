import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              ./trang
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/resume" className={navLinkText}>
              resume
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              blog
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              contact
            </Link>
          </li> */}
        </ul>
        <hr></hr>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout