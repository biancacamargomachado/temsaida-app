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
      <>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Centro%20de%20Atendimento%20%C3%80%20mulher,%20S%C3%A3o%20Paulo%20SP&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
      </>
    </div>
  );
}

export default App;
