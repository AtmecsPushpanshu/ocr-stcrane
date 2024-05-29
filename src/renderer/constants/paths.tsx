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
    Icon: CameraIcon,
    link: '',
    items: [
      {
        name: 'Live View',
        Icon: null,
        link: '',
      },
      {
        name: 'Image Analysis',
        Icon: null,
        link: '',
      },
      {
        name: 'Add Device',
        Icon: null,
        link: PATHS.DASHBOARD.addcamera,
      },
    ],
  },
  {
    name: 'Central Server',
    Icon: ServerIcon,
  },
];