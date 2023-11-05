import { useRoutes } from 'react-router-dom';

// routes
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([PrivateRoutes, PublicRoutes]);
}
