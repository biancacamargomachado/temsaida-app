import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from '../utils/theme';
import Button from '@mui/material/Button';
import '../App.css';

function PdfPage() {
  return (
    <div className="App" >
      <div className='header' />
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', maxWidth: 350, padding: '5%' }}>
          <Typography className='title' variant="h6" component="div" gutterBottom>SAIBA MAIS</Typography>
        </Box>

        <a rel="noreferrer" href="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/trabalho/Cartilha_Tem_Saida_mulheres%20(1).pdf" target="_blank">
          <img alt="Acesse a cartilha do tem saída por aqui" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643535106/pdf_link_fpdvey.png' />
        </a>
        <div style={{ width: '100%', height: '20px' }} />
        <img alt="Passos de funionamento do programa" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643534726/program-steps_cfrd8b.png' />
      </ThemeProvider>
    </div>
  );
}

export default PdfPage;
