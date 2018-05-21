/* eslint-disable function-paren-newline */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../common/routes';

export const renderer = (path) => {
  const content = renderToString(
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>,
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
};
