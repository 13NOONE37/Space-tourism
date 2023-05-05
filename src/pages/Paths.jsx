import Crew from './crew/Crew';
import Destination from './desination/Destination';
import Home from './home/Home';
import Technology from './technology/Technology';

const paths = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/destination',
    element: <Destination />,
  },
  {
    path: '/crew',
    element: <Crew />,
  },
  {
    path: '/technology',
    element: <Technology />,
  },
];

export default paths;
