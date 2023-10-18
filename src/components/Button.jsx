import clsx from 'clsx';

function Button({ children, className, ...propsMore }) {
  let TagName = 'button';
  let classes =
    className +
    ' ' +
    clsx(
      'min-w-[150px]',
      'rounded',
      'border',
      'border-[#1618231f]',
      'px-[20px]',
      'h-[36px]',
      'font-semibold'
    );
  return (
    <TagName className={classes} {...propsMore}>
      <div
        className={clsx(
          'w-full',
          'h-full',
          'flex',
          'items-center',
          'justify-center'
        )}
      >
        {children}
      </div>
    </TagName>
  );
}

export default Button;
