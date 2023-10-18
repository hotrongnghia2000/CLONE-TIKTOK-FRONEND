import * as Icons from '../../components/Icons';

import clsx from 'clsx';

function AccountItem({ data }) {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'p-[9px_16px]',
        'hover:bg-[#16182308]',
        'cursor-pointer'
      )}
    >
      <div
        className={clsx(
          'w-[40px]',
          'h-[40px]',
          'rounded-full',
          'overflow-hidden',
          'mr-[12px]'
        )}
      >
        <img src={data.avatar} alt={data.full_name} />
      </div>
      <div>
        <p className={clsx('font-semibold')}>
          {data.nickname}
          {data.tick && (
            <Icons.Tick
              className={clsx('inline-block', 'mt-[-10px]', 'ml-[5px]')}
            />
          )}
        </p>
        <p className={clsx('text-[1.4rem]')}>{data.full_name}</p>
      </div>
    </div>
  );
}

export default AccountItem;
