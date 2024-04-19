import * as React from "react";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import $ from "./HomeLayout.module.scss";

const HomeLayout: React.FC = () => {
  return (
    <div className={$.wrapper}>
      <section className={$.firstYear}>
        <Link to={`${paths.years}/2013`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5670.webp"
            alt=""
          ></img>
          <h2>2013</h2>
        </Link>
      </section>

      <section className={$.secondYear}>
        <Link to={`${paths.years}/2014`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5719.webp"
            alt=""
          ></img>
          <h2>2014</h2>
        </Link>
      </section>

      <section className={$.thirdYear}>
        <Link to={`${paths.years}/2015`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5876.webp"
            alt=""
          ></img>
          <h2>2015</h2>
        </Link>
      </section>

      <section className={$.forthYear}>
        <Link to={`${paths.years}/2016`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5884.webp"
            alt=""
          ></img>
          <h2>2016</h2>
        </Link>
      </section>

      <section className={$.fifthYear}>
        <Link to={`${paths.years}/2017`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5934.webp"
            alt=""
          ></img>
          <h2>2017</h2>
        </Link>
      </section>

      <section className={$.sixthYear}>
        <Link to={`${paths.years}/2018`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-5983.webp"
            alt=""
          ></img>
          <h2>2018</h2>
        </Link>
      </section>

      <section className={$.seventhYear}>
        <Link to={`${paths.years}/2019`}>
          <img className={$.img} src="./assets/cssday-2019.webp" alt=""></img>
          <h2>2019</h2>
        </Link>
      </section>

      <section className={$.eighthYear}>
        <Link to={`${paths.years}/2022`}>
          <img className={$.img} src="./assets/cssday-2022.webp" alt=""></img>
          <h2>2022</h2>
        </Link>
      </section>

      <section className={$.ninthYear}>
        <Link to={`${paths.years}/2023`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-6525.webp"
            alt=""
          ></img>
          <h2>2023</h2>
        </Link>
      </section>

      <section className={$.tenthYear}>
        <Link to={`${paths.years}/2024`}>
          <img
            className={$.img}
            src="./assets/cssday-2023-6371.webp"
            alt=""
          ></img>
          <h2>2024</h2>
        </Link>
      </section>
    </div>
  );
};

export default HomeLayout;
