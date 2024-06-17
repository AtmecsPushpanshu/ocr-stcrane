import { CameraIcon, CraneIcon, ServerIcon, PlcIcon } from './systemIcons';

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
    name: 'Cranes',
    Icon: CraneIcon,
    link: 'view-cranes',
  },
  {
    name: 'Camera Configuration',
    Icon: CameraIcon,
    link: '',
    items: [
      {
        name: 'Add Device',
        Icon: null,
        link: 'view-camera-config',
      },
      {
        name: 'Live View',
        Icon: null,
        link: 'live-view',
      },
    ],
  },
  // {
  //   name: 'Central Server',
  //   Icon: ServerIcon,
  // },
  {
    name: 'PLC',
    Icon: PlcIcon,
    link: 'view-plc-config',
  },
];
