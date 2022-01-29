import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import theme from './utils/theme';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography variant="h1" component="div" gutterBottom>
        H1 Typography
      </Typography>
      <ThemeProvider theme={theme}>
        <Checkbox defaultChecked />
      </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
