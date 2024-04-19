import { Link } from "react-router-dom";
import $ from "./Header.module.scss";
import paths from "../../constants/paths";

const Header: React.FC = () => {
  return (
    <>
      <header className={$.header}>
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
      </header>
    </>
  );
};

export default Header;
