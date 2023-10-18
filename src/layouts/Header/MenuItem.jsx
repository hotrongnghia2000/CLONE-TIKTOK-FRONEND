import clsx from 'clsx';
function MenuItem({ data, onClick, isRoot = false }) {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'p-[10px_8px_10px_16px]',
        'hover:bg-[#16182308]',
        'cursor-pointer',
        {
          'border-t border-[#1618231f] ': data.separation,
        }
      )}
      onClick={onClick}
    >
      <div className={clsx('mr-[8px]')}>{data.icon}</div>
      <span className={clsx({ 'font-semibold': isRoot })}>{data.title}</span>
    </div>
  );
}

export default MenuItem;
