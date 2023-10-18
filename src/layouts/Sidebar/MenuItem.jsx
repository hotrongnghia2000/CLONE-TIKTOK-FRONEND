import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

function MenuItem({ icon, activeIcon, title, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'group',
          'flex',
          'items-center',
          'h-[48px]',
          'p-[8px]',
          'hover:bg-[#16182308]',
          {
            'active text-[var(--primary)]': isActive,
          }
        )
      }
      to={to}
    >
      <div className={clsx('hidden', 'group-[.active]:block')}>
        {activeIcon}
      </div>
      <div className={clsx('group-[.active]:hidden')}>{icon}</div>
      <span className={clsx('text-[18px]', 'font-bold', 'ml-[8px]')}>
        {title}
      </span>
    </NavLink>
  );
}

export default MenuItem;
