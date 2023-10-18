import clsx from 'clsx';
import Menu from './Menu';

function Sidebar() {
  return (
    <div
      className={clsx('sidebar', 'w-[35.6rem]', 'p-[20px_0_26px_8px]', 'fixed')}
    >
      <div className={clsx('border-b', 'border-x-gray-500')}>
        <Menu />
      </div>
    </div>
  );
}

export default Sidebar;
