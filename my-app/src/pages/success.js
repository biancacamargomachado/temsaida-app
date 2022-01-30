import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from '../utils/theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';


function Success() {
  return (
    <div className="App" >
      <div className='header' />
      <ThemeProvider theme={theme}>
          <div style={{ marginTop: '20%', marginBottom: '10%'}}>
            <img alt="Cadastro realizado com sucesso!" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643532631/text-success_xg5yye.png' />
          </div>
          <div style={{ marginBottom: '10%'}}>
            <Button className='button' variant='contained'>ACESSE SEU PERFIL</Button>
          </div>

          <div style={{ marginBottom: '10%'}}>
            <img alt="Cadastro realizado com sucesso!" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643532844/woman-img_fovrti.png' />
          </div>
      </ThemeProvider>
    </div>
  );
}

export default Success;
