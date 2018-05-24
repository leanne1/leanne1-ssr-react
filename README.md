# leanne1-react-ssr

Server-side rendered React app with Redux integration and React router. Includes isomorphic
authentication (Google oAuth) using cookies for authenticating API requests on both the server
and in the client. Also includes isomorphic `404`s and redirects and Open Graph meta tags for
enhanced SEO.


## Routes

- `/` - non-authed route
- `/users` - non-authed  route
- `/admins` - authed route, redirects to `/` when not authed
- `/api/auth/google` - Google oAuth flow via third-party API request


## Install and run

- Clone this repo
- `npm i`
- `npm run dev` => `localhost:3000`
