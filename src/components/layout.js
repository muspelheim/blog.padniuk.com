import React from "react"
import { Link } from "gatsby"
import ScrollToTop from "react-scroll-up";

import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://blog.padniuk.com">Evgeny Padniuk</a>
      </footer>

        {/*todo: move*/}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>

        <ScrollToTop showUnder={160}>
            <FontAwesomeIcon icon={faArrowAltCircleUp}  size="3x" />
        </ScrollToTop>
    </div>
  )
}

export default Layout
