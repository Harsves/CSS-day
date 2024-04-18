import paths from "./constants/paths";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Years from "./layouts/YearsLayout/Years";

type Route = {
  path: string;
  view: React.FC;
  exact?: boolean;
};

const routes: Route[] = [
  {
    path: paths.home,
    view: HomeLayout,
  },
  {
    path: `${paths.years}/:year`,
    view: Years,
  },
];

export default routes;
