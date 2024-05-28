import { useRoutes } from 'react-router';
import Routes from './routes';

export default function AppRouter() {
  const content = useRoutes(Routes);
  return <>{content}</>;
}
