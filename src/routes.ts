import { Router } from 'express';

const routes = Router();

import fs from 'fs';
const routePath = './src/modules/';
fs.readdirSync(routePath).forEach(async function (module) {
  if (module != '.DS_Store') {
    let route;
    if (process.env.NODE_ENV === 'development') {
      route = './src/modules/' + module + '/routes/' + module + 'Routes.ts';
    }
    if (process.env.NODE_ENV === 'production') {
      route = './dist/modules/' + module + '/routes/' + module + 'Routes.js';
    }
    if (fs.existsSync(route)) {
      const moduleRoutes = await import(route.replace('./src', '.').replace('./dist', '.'));
      routes.use('/' + module, moduleRoutes.default);
    }
  }
});

export default routes;
