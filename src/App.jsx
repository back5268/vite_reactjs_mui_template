import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from '@routes';

// defaultTheme
import themes from '@themes';

// project imports
import NavigationScroll from '@layout/NavigationScroll';
import { useConfigState } from '@store';
import Toast from '@layout/Toast';

function App() {
  const { isOpen, defaultId, fontFamily, borderRadius, opened } = useConfigState();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({ isOpen, defaultId, fontFamily, borderRadius, opened })}>
        <CssBaseline />
        {/* <Toast /> */}
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
