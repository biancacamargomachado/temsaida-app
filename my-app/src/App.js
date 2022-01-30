import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import theme from './utils/theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';


function App() {
  return (
    <div className="App" >
      <div className='header' />
      <ThemeProvider theme={theme}>
        <Stack className='stackButton' spacing={2} direction="column">
          <Button className='button' variant="contained">Quero me cadastrar</Button>
          <Button className='button' variant="outlined">Quero me cadastrar</Button>
        </Stack>
        <Box sx={{ width: '100%', maxWidth: 350, padding: '5%' }}>
          <Typography className='title' variant="h6" component="div" gutterBottom>APOIADORES:</Typography>
        </Box>

        <img alt="Apoiadores: Prefeitura da cidade de São Paulo, Onu Mulheres e outros" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643522812/apoiadores_x3yg41.png' />

        <img alt="Imagem ilustrativa sobre para quem o projeto é feito: para mulheres" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643523173/home-who_tbubew.png" />

        <Box sx={{ width: '100%', maxWidth: 350, padding: '5%' }}>
          <Typography className='title' variant="h6" component="div" gutterBottom>COMO FUNCIONA?</Typography>
        </Box>

        <img alt="Passos para se cadastrar na plataforma: cadatrar, solicitar ofício, gerar currículo, receber " src="https://res.cloudinary.com/app-temsaida/image/upload/v1643523513/steps_wkvzkp.png" />
        
        <div className='lastButton'>
          <Button className='button' variant="contained">SAIBA MAIS</Button>
        </div>
      </ThemeProvider>
        {/* <div className="mapouter"><div class="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Centro%20de%20Atendimento%20%C3%80%20mulher,%20S%C3%A3o%20Paulo%20SP&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div> */}
    </div>
  );
}

export default App;
