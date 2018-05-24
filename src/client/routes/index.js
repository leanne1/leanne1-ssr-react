import Home from '../containers/pages/Home';
import Users, { loadData as loadUsersData } from '../containers/pages/Users';
import Admins, { loadData as loadAdminsData } from '../containers/pages/Admins';
import NotFound from '../containers/pages/NotFound';
import App, { loadData as loadAppData } from '../containers/App';

export default [
  {
    component: App,
    loadData: loadAppData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/admins',
        component: Admins,
        loadData: loadAdminsData,
      },
      {
        path: '/users',
        component: Users,
        loadData: loadUsersData,
      },
      {
        component: NotFound,
      },
    ],
  },
];
