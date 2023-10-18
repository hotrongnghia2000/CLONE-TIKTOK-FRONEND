import { useRoutes } from 'react-router-dom';
import { privateRouter } from './PrivateRouter';
import { publicRouter } from './PublicRouter';

function Routers() {
  let routes = [...privateRouter, ...publicRouter];
  let element = useRoutes(routes);
  return element;
}

export default Routers;
