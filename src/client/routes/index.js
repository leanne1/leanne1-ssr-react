import Home from '../containers/pages/Home';
import Users, { loadData as loadUsersData } from '../containers/pages/Users';
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
        path: '/users',
        component: Users,
        loadData: loadUsersData,
      },
    ],
  },
];
