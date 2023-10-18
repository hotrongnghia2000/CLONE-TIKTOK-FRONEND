import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import Header from './Header';
import Sidebar from './Sidebar';
function MainLayout() {
  return (
    <div
      className={clsx(
        'main-layout',
        'flex',
        'flex-col',
        'items-center',
        'min-h-screen'
      )}
    >
      {/* Header */}
      <Header />
      <div
        className={clsx(
          'flex',
          'justify-between',
          'w-screen',
          'mt-[60px]',
          'max-w-[var(--width-default)]',
          'h-[calc(100vh-60px)]'
        )}
      >
        {/* Sidebar */}
        <div className={clsx('sidebar')}>
          <Sidebar />
        </div>
        <div className={clsx('page')}>
          <Outlet />
        </div>
      </div>
      {/* Pages */}
    </div>
  );
}

export default MainLayout;
