import { Route as rootRoute } from './routes/__root';
import { Route as IndexRoute } from './routes/index';
import { Route as SponsorsRoute } from './routes/sponsors';
import { Route as ScheduleRoute } from './routes/schedule';

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexRoute;
      parentRoute: typeof rootRoute;
    };
    '/sponsors': {
      preLoaderRoute: typeof SponsorsRoute;
      parentRoute: typeof rootRoute;
    };
    '/schedule': {
      preLoaderRoute: typeof ScheduleRoute;
      parentRoute: typeof rootRoute;
    };
  }
}

export const routeTree = rootRoute.addChildren([IndexRoute, SponsorsRoute, ScheduleRoute]);
