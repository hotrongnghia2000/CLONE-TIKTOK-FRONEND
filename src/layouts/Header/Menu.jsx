import avatar from '../../assets/imgs/avatar.jpg';
import clsx from 'clsx';
import React from 'react';
import * as Icons from '../../components/Icons';
import TippyHeadless from '@tippyjs/react/headless';
import MenuItem from './MenuItem';

function Menu({ isUser, items = [] }) {
  // Lý do phải khởi tạo đối tượng {data: items} là:
  //  + item.children không phải là mảng mà là object
  //  + item.children có thuộc tính là data, chính là mảng mà ta cần truy cập
  //  + Lần render lại sau khi setHistory, ta có current.data là một mảng hợp lệ
  const [history, setHistory] = React.useState([{ data: items }]);
  const current = history[history.length - 1];

  const getMenuItems = () => {
    // Return này là của map, phải có return để hàm map trả về item
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      // Return này là của function getMenuItems
      return (
        <MenuItem
          key={index}
          data={item}
          isRoot={history.length === 1}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  const onBackMenu = () => {
    setHistory(history.slice(0, -1));
  };
  return (
    <div className={clsx('menu')}>
      <TippyHeadless
        delay={[0, 500]}
        placement="bottom"
        hideOnClick="false"
        interactive
        onHide={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <div
              className={clsx(
                'action__menu',
                'min-w-[223px]',
                'py-[8px]',
                'shadow-[0_2px_12px_#0000001f]',
                'bg-[var(--light)]',
                'mt-[-1px]',
                'rounded-[8px]',
                'overflow-auto'
              )}
            >
              <div
                className={clsx(
                  'relative',
                  'flex',
                  'justify-center',
                  'w-full',
                  {
                    hidden: !current.title,
                  }
                )}
              >
                <button
                  className={clsx('absolute', 'left-[16px]')}
                  onClick={onBackMenu}
                >
                  <Icons.Back />
                </button>
                <span className={clsx('font-semibold')}>{current.title}</span>
              </div>
              <div>{getMenuItems()}</div>
            </div>
          </div>
        )}
      >
        {/*  */}
        {/* Tippy is attach action__menu-btn */}
        <div
          className={clsx(
            'action__menu-btn',
            'ml-[16px]',
            'py-[4px]',
            'cursor-pointer'
          )}
        >
          {isUser ? (
            <div
              className={clsx(
                'menu__avatar',
                'flex',
                'items-center',
                'w-[32px]',
                'h-[32px]',
                'rounded-full',
                'overflow-hidden'
              )}
            >
              <img src={avatar} alt="Hồ Trọng Nghĩa" />
            </div>
          ) : (
            <Icons.Vertical />
          )}
        </div>
        {/*  */}
      </TippyHeadless>
    </div>
  );
}

export default Menu;
