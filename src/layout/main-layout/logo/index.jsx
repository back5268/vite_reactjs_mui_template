import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from '@components/Logo';
import config from '@config';
import { useConfigState } from '@store/configState';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const { defaultId, setIsOpen } = useConfigState()

  return (
    <ButtonBase disableRipple onClick={() => setIsOpen(defaultId)} component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
