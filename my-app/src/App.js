import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from './utils/theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App" >
      <div className='header'><Link style={{ textDecoration: 'none' }} to="/"></Link></div>
      <ThemeProvider theme={theme}>
        <Stack className='stackButton' spacing={2} direction="column">
          <Link style={{ textDecoration: 'none' }} to="/signin"><Button className='button' variant="contained" alt="Quero me cadastrar">Quero me cadastrar</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/login"><Button className='button' variant="outlined" alt="ACESSAR PERFIL">ACESSAR PERFIL</Button></Link>
        </Stack>
        <Box sx={{ width: '100%', maxWidth: 350, padding: '5%' }}>
          <Typography className='title' variant="h6" component="div" gutterBottom>APOIADORES:</Typography>
        </Box>

        <img alt="Apoiadores: Prefeitura da cidade de São Paulo, Onu Mulheres e outros" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643522812/apoiadores_x3yg41.png' />

        <img alt="Imagem ilustrativa sobre para quem o projeto é feito: para mulheres" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643523173/home-who_tbubew.png" />

        <Box sx={{ width: '100%', maxWidth: 350, padding: '5%' }}>
          <Typography className='title' variant="h6" component="div" gutterBottom>COMO FUNCIONA?</Typography>
        </Box>

        <img alt="Passos para se cadastrar na plataforma: cadatrar, solicitar ofício, gerar currículo, receber " src="https://res.cloudinary.com/app-temsaida/image/upload/v1643545291/final_ul1461.png" />
        
        <div className='lastButton'>
          <Link style={{ textDecoration: 'none' }} to="/pdf-page"><Button className='button' variant="contained">SAIBA MAIS</Button></Link>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
