import Home from '../../client/containers/Home';
import Users, { loadData as loadUsersData } from '../../client/containers/Users';

export default [
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
];
