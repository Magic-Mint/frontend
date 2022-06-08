import { TwitterBtn, TwitterIcon } from './styles';

const AuthTwitterBtn = () => {
  const onClick = () => {
    window.location.href = process.env.REACT_APP_AUTH_TWITTER;
  };

  return (
    <TwitterBtn onClick={onClick}>
      <TwitterIcon />
      Sign In
    </TwitterBtn>
  );
};

export default AuthTwitterBtn;
