import clsx from 'clsx';
import * as Icons from '../../components/Icons';
import Tippy from '@tippyjs/react';
import Button from '../../components/Button';

function Action({ isUser }) {
  return (
    <div className={clsx('action', 'flex', 'items-center')}>
      {/* upload */}
      <Button
        className={clsx('action__upload-btn', 'mr-4', 'hover:bg-[#16182308]')}
      >
        <Icons.Plus className={clsx('pr-3')} />
        <span>Upload</span>
      </Button>
      {/* login */}
      <Button
        className={clsx(
          'action__upload-btn',
          'bg-[var(--primary)]',
          'text-[var(--light)]',
          'hover:bg-[#EF2950]',
          {
            hidden: isUser,
          }
        )}
      >
        <div>Log in</div>
      </Button>

      {/* Action after logged */}
      {/* Message */}
      <Tippy
        // trigger="click"
        content="Messenges"
        offset={[0, 13]}
      >
        <button
          className={clsx('ml-[16px]', {
            hidden: !isUser,
          })}
        >
          <div>
            <Icons.Message />
          </div>
        </button>
      </Tippy>
      <Tippy content="Inbox">
        <button
          className={clsx('ml-[16px]', {
            hidden: !isUser,
          })}
        >
          <div>
            <Icons.Inbox />
          </div>
        </button>
      </Tippy>
    </div>
  );
}

export default Action;
