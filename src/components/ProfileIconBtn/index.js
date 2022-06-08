import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User';
import { Wrapper, ProfileImage, PopUpMenu, TriangleIcon, PopUpItem } from './styles';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import useClickOutside from '../../hooks/useClickOutside';
import useLogout from '../../hooks/useLogout';

const ProfileIconBtn = () => {
  const { user } = useUser();
  const { logout } = useLogout();
  const [toggleMenu, setToggleMenu] = useState(false);
  const wrapperRef = useRef();
  const navigate = useNavigate();

  useClickOutside(wrapperRef, () => setToggleMenu(false));
  if (!user) {
    return null;
  }

  return (
    <Wrapper ref={wrapperRef}>
      <ProfileImage
        src={user.provider.photo}
        alt="twitter profile image"
        onClick={() => setToggleMenu((current) => !current)}
      />
      {toggleMenu && (
        <PopUpMenu>
          <TriangleIcon />
          <PopUpItem
            onClick={() => {
              navigate('/profile');
              setToggleMenu(false);
            }}>
            <ProfileIcon />
            Profile
          </PopUpItem>
          <PopUpItem
            onClick={() => {
              logout();
              setToggleMenu(false);
            }}>
            <TwitterIcon />
            Log out
          </PopUpItem>
        </PopUpMenu>
      )}
    </Wrapper>
  );
};

export default ProfileIconBtn;
