import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";

import $ from "./Header.module.scss";
import { cx } from "../../utils/join-class-names";

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [closeNavbar, setCloseNavbar] = useState(false);

  const closeMenu = () => {
    setShowNavbar(false);
    setCloseNavbar(false);
  };

  const handleCloseNavbar = () => {
    setCloseNavbar(true);
    setTimeout(() => {
      setShowNavbar(false);
      setCloseNavbar(false);
    }, 300);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setCloseNavbar(false);
  };

  return (
    <header className={$.header}>
      <nav>
        <button className={$.menuIcon} onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={$.menuContainer}>
          <div className={$.menuOverlay} onClick={handleCloseNavbar}>
            <div
              className={cx(
                $.navElements,
                showNavbar && $.navElementsActive,
                closeNavbar && $.navElementsSlideOut
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeMenu} className={$.closeBtnMobileMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <Link className={$.link} to={`${paths.home}`}>
                <p>Home</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2013`}>
                <p>2013</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2014`}>
                <p>2014</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2015`}>
                <p>2015</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2016`}>
                <p>2016</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2017`}>
                <p>2017</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2018`}>
                <p>2018</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2019`}>
                <p>2019</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2022`}>
                <p>2022</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2023`}>
                <p>2023</p>
              </Link>
              <Link className={$.link} to={`${paths.years}/2024`}>
                <p>2024</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
