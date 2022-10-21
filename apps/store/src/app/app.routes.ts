import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'game/:id',
    loadChildren: () => import('libs/store/feature-game-detail/src').then(
      module => module.StoreFeatureGameDetailModule
    )
  }
];
