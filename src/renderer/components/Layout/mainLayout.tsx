import { Outlet } from 'react-router-dom';
import SideNav from './sideNav';

function MainLayout() {
  return (
    <div className="grid-main-layout-container">
      <aside className="grid-main-layout-sidebar">
        <SideNav />
      </aside>
      <main className="grid-main-layout-content">
        <div className="grid-main-sub-layout-container">
          <header className="grid-main-layout-header"></header>
          <div className="grid-main-sub-layout-content">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
