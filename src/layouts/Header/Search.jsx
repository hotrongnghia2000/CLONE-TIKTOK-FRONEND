import clsx from 'clsx';
import React from 'react';

import userApi from '../../api/userApi';
import * as Icons from '../../components/Icons';
import useDebounce from '../../hooks/useDebounce';
// Tippy headless only appear when right codition
import TippyHeadless from '@tippyjs/react/headless';
import AccountItem from './AccountItem';

function Search() {
  // Hook
  const [value, setValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  const [result, setResult] = React.useState([]);

  const inputRef = React.useRef();
  const debounceValue = useDebounce(value, 1000);

  // call api
  React.useEffect(() => {
    // stop when valueDebounce is null
    if (!debounceValue.trim()) {
      return;
    }
    // create a function async to use await
    const searchUserApi = async () => {
      try {
        setIsLoading(true);
        const res = await userApi.get({ q: debounceValue, type: 'less' });
        setIsLoading(false);
        setResult(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchUserApi();
  }, [debounceValue]);

  // function
  const handleSearchValue = (e) => {
    const value = e.target.value;
    // if value not start with a space, value will be updated
    if (!value.startsWith(' ')) {
      setValue(value);
    }
  };

  return (
    <div>
      <TippyHeadless
        visible={value.length > 0 && debounceValue.length > 0 && isFocus}
        onClickOutside={() => {
          setIsFocus(false);
        }}
        interactive
        placement="bottom"
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div
              className={clsx(
                'search__result',
                'w-[361px]',
                'max-h-[400px]',
                'min-h-[60px]',
                'shadow-[0_2px_12px_#0000001f]',
                'bg-[var(--light)]',
                'mt-[-1px]',
                'rounded-[8px]',
                'overflow-auto'
              )}
            >
              <h3
                className={clsx(
                  'search__title',
                  'p-[5px_12px]',
                  'font-semibold',
                  'text-[#16182380]',
                  'text-[1.4rem]'
                )}
              >
                Accounts
              </h3>
              {/* account item search */}
              {result.map((account, index) => (
                <AccountItem key={index} data={account} />
              ))}
              <div
                className={clsx('text-[var(--error)]', 'p-[5px_12px]', {
                  hidden: !!result.length || isLoading,
                })}
              >
                No matching results were found
              </div>
            </div>
          </div>
        )}
      >
        <form
          className={clsx(
            'search',
            'relative',
            'flex',
            'items-center',
            'p-[11px_15px]',
            'rounded-full',
            'border-[1.5px]',
            // Children of form have focus then active the property
            'focus-within:border-[#16182333]',
            'bg-[#1618230f]'
          )}
        >
          <input
            className={clsx(
              'search__input',
              'w-[292px]',
              'h-[22px]',
              'bg-transparent',
              'outline-0',
              'caret-[var(--primary)]',
              'placeholder-[#212121]'
            )}
            placeholder="Search accounts and videos"
            onChange={handleSearchValue}
            ref={inputRef}
            // Two-way binding
            value={value}
            onFocus={() => setIsFocus(true)}
          />

          {/* Clear search */}
          <div
            className={clsx(
              'search__clear',
              'mx-[11px]',
              'absolute',
              'right-[50px]',
              {
                hidden: !value || isLoading,
              }
            )}
            onClick={() => {
              setValue('');
              inputRef.current.focus();
            }}
          >
            <Icons.Clear />
          </div>
          {/* Loading when fetch api search */}
          <div
            className={clsx(
              'search__loading',
              'mx-[11px]',
              'absolute',
              'right-[50px]',
              'animate-spin',
              {
                hidden: !isLoading,
              }
            )}
          >
            <Icons.Loading />
          </div>

          {/* Separator Line */}
          <span
            className={clsx(
              'separator',
              'w-[1px]',
              'h-[28px]',
              'bg-[rgba(22,24,35,0.12)]',
              'my-[-3px]'
            )}
          ></span>

          {/*  */}

          {/* Separator Line */}
          <span
            className={clsx(
              'separator',
              'w-[1px]',
              'h-[28px]',
              'bg-[#1618231f]',
              'my-[-3px]'
            )}
          ></span>

          {/*  */}
          <button
            className={clsx(
              'p-[11px_16px_11px_12px]',
              'm-[-16px_-16px_-16px_0]',
              'rounded-tr-full',
              'rounded-br-full',
              'active:bg-[#1618230f]',
              'hover:bg-[#16182308]',
              {
                'text-[#161616]': value,
                'text-[#A3A3A8]': !value,
              }
            )}
            onClick={(e) => e.preventDefault()}
          >
            <Icons.Search />
          </button>
        </form>
      </TippyHeadless>
    </div>
  );
}

export default Search;
