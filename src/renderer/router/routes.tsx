import { ComponentType, lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import BaseLayout from '../components/Layout/baseLayout';
import MainLayout from '../components/Layout/mainLayout';
import SuspenseLoader from '../components/SuspenseLoader';

const Loader =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );
  };

// Pages

const ViewCameraConfig = Loader(
  lazy(() => import('../screens/CameraConfig/ViewCameraConfig')),
);
const AddCamera = Loader(
  lazy(() => import('../screens/CameraConfig/AddCamera')),
);
const AddCameraPreset = Loader(
  lazy(() => import('../screens/DevicePreset/AddCameraPreset')),
);
const ViewCameraPreset = Loader(
  lazy(() => import('../screens/DevicePreset/ViewCameraPreset')),
);
const Login = Loader(lazy(() => import('../screens/Login/index')));
const ViewPlc = Loader(lazy(() => import('../screens/PLC/ViewPlc')));
const AddPlcDevice = Loader(lazy(() => import('../screens/PLC/AddPlcDevice')));
const LiveView = Loader(lazy(() => import('../screens/LiveView/LiveView')));
const ViewCranes = Loader(lazy(() => import('../screens/Cranes/ViewCranes')));
const AddCraneForm = Loader(
  lazy(() => import('../screens/Cranes/AddCraneForm')),
);

const Routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <LiveView />,
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <MainLayout />,
    children: [
      {
        path: 'view-cranes',
        element: <ViewCranes />,
      },
      {
        path: 'add-cranes',
        element: <AddCraneForm />,
      },
      {
        path: 'view-camera-config',
        element: <ViewCameraConfig />,
      },
      {
        path: 'add-camera',
        element: <AddCamera />,
      },
      {
        path: 'view-camera-preset',
        element: <ViewCameraPreset />,
      },
      {
        path: 'add-camera-preset',
        element: <AddCameraPreset />,
      },
      {
        path: 'view-plc-config',
        element: <ViewPlc />,
      },
      {
        path: 'add-plc-config',
        element: <AddPlcDevice />,
      },
      {
        path: 'live-view',
        element: <LiveView />,
      },
    ],
  },
];

export default Routes;

// Dashboards

// const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// // Applications

// const Messenger = Loader(
//   lazy(() => import('src/content/applications/Messenger'))
// );
// const Transactions = Loader(
//   lazy(() => import('src/content/applications/Transactions'))
// );
// const UserProfile = Loader(
//   lazy(() => import('src/content/applications/Users/profile'))
// );
// const UserSettings = Loader(
//   lazy(() => import('src/content/applications/Users/settings'))
// );

// // Status

// const Status404 = Loader(
//   lazy(() => import('src/content/pages/Status/Status404'))
// );
// const Status500 = Loader(
//   lazy(() => import('src/content/pages/Status/Status500'))
// );
// const StatusComingSoon = Loader(
//   lazy(() => import('src/content/pages/Status/ComingSoon'))
// );
// const StatusMaintenance = Loader(
//   lazy(() => import('src/content/pages/Status/Maintenance'))
// );import BaseLayout from './components/Layout/baseLayout';

// {
//   path: '',
//   element: <BaseLayout />,
//   children: [
//     {
//       path: '/',
//       element: <Overview />
//     },
//     {
//       path: 'overview',
//       element: <Navigate to="/" replace />
//     },
//     {
//       path: 'status',
//       children: [
//         {
//           path: '',
//           element: <Navigate to="404" replace />
//         },
//         {
//           path: '404',
//           element: <Status404 />
//         },
//         {
//           path: '500',
//           element: <Status500 />
//         },
//         {
//           path: 'maintenance',
//           element: <StatusMaintenance />
//         },
//         {
//           path: 'coming-soon',
//           element: <StatusComingSoon />
//         }
//       ]
//     },
//     {
//       path: '*',
//       element: <Status404 />
//     }
//   ]
// },
