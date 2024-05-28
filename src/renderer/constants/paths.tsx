import { CameraIcon, ServerIcon } from './systemIcons';

export const PATHS = {
  AUTH: { signIn: '/', signUp: 'sign-up', resetPassword: 'reset-password' },
  DASHBOARD: {
    root: 'dashboard',
    viewcameraconfig: 'dashboard/view-camera-config',
    addcamera: 'dashboard/add-camera',
  },
  ERRORS: { notFound: 'errors/not-found' },
} as const;

export const SideMenuPaths = [
  {
    name: 'Camera Configuration',
    Icon: <CameraIcon />,
    link:'',
    items: [
      {
        title: 'Live View',
        Icon: null,
      },
      {
        title: 'Image Analysis',
        Icon: null,
      },
      {
        title: 'Add Device',
        Icon: null,
      },
    ],
  },
  {
    name: 'Central Server',
    Icon: <ServerIcon />,
  },
];