import { lazy } from 'react';

export interface IRoute {
  path: string;
  isExact: boolean;
  Component: React.ComponentType<any>;
  privateRoute?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    isExact: true,
    Component: lazy(() => import('../container/HomePage')),
  },
  {
    path: '/insured',
    isExact: true,
    Component: lazy(() => import('../container/InsuredPage')),
    privateRoute: true,
  },
  {
    path: '/plan',
    isExact: true,
    Component: lazy(() => import('../container/PlanPage')),
    privateRoute: true,
  },
  {
    path: '/thanks',
    isExact: true,
    Component: lazy(() => import('../container/FinishPage')),
    privateRoute: true,
  },
];
