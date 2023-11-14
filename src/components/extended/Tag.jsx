import { Chip, useTheme } from '@mui/material';

const Tag = (props) => {
  const { label, type } = props;
  const theme = useTheme();

  const chipSX = {
    height: 24,
    padding: '0 6px'
  };
  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light
  };

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light
  };

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light
  };

  const chipDefaultSX = {
    ...chipSX,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light
  };

  let chip = {};
  switch (type) {
    case 'success':
      chip = chipSuccessSX;
      break;
    case 'warning':
      chip = chipWarningSX;
      break;
    case 'error':
      chip = chipErrorSX;
      break;
    default:
      chip = chipDefaultSX;
      break;
  }

  return <Chip label={label} sx={chip} />;
};

export default Tag;
