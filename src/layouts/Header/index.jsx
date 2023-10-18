import clsx from 'clsx';

import Logo from './Logo';
import Search from './Search';
import Action from './Action';
import Menu from './Menu';

import * as Icons from '../../components/Icons';

const MENU = [
  {
    icon: <Icons.Language />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          children: {
            title: 'Test',
            data: [
              {
                code: 'en_sub',
                title: 'English sub',
              },
            ],
          },
        },
        {
          code: 'en',
          title: 'VietNamese',
        },
      ],
    },
  },
  {
    icon: <Icons.Question />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <Icons.Keyboard />,
    title: 'Keyboard shourcuts',
  },
];

const USER_MENU = [
  {
    icon: <Icons.Profile />,
    title: 'View profile',
  },
  {
    icon: <Icons.Coin />,
    title: 'Get coins',
  },
  {
    icon: <Icons.Live width="2rem" height="2rem" />,
    title: 'Live Studio',
  },
  {
    icon: <Icons.Setting />,
    title: 'Settings',
  },
  {
    icon: <Icons.Language />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          children: {
            title: 'Test',
            data: [
              {
                code: 'en_sub',
                title: 'English sub',
              },
            ],
          },
        },
        {
          code: 'en',
          title: 'VietNamese',
        },
      ],
    },
  },
  {
    icon: <Icons.Question />,
    title: 'Feedback and help',
    to: '/feedback',
  },

  {
    icon: <Icons.Logout />,
    title: 'Log out',
    separation: true,
  },
];

function Header() {
  const isUser = true;
  return (
    <header
      className={clsx(
        'h-[60px]',
        'w-full',
        'flex',
        'justify-center',
        'fixed',
        'z-50',
        'shadow-[0_1px_1px_rgba(0,0,0,12%)]',
        'bg-[var(--light)]'
      )}
    >
      <div
        className={clsx(
          'w-[1150px]',
          'px-8',
          'flex',
          'justify-between',
          'items-center'
        )}
      >
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* Action */}
        <Action isUser={isUser} />
        {/* Menu */}
        <Menu isUser={isUser} items={isUser ? USER_MENU : MENU} />
      </div>
    </header>
  );
}

export default Header;
