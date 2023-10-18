import clsx from 'clsx';
import MenuItem from './MenuItem';
import * as Icons from '../../components/Icons';

function Menu() {
  return (
    <nav className={clsx('menu')}>
      <MenuItem
        // Active dependent on "/home", not "/"
        to="/home"
        icon={<Icons.Home />}
        activeIcon={<Icons.ActiveHome width="3.2rem" height="3.2rem" />}
        title="For You"
      />
      <MenuItem
        to="/login"
        icon={<Icons.Following />}
        activeIcon={<Icons.ActiveFollowing />}
        title="Following"
      />
      <MenuItem
        to="/admin"
        icon={
          <Icons.Live
            width="2.8rem"
            height="2.8rem"
            className={clsx('ml-[2px]')}
          />
        }
        activeIcon={<Icons.ActiveLive />}
        title="LIVE"
      />
    </nav>
  );
}

export default Menu;
