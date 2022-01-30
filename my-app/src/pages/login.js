import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import theme, { innerTheme } from '../utils/theme';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css';


function Login() {
  return (
    <div className="App" >
      <div className='header' />
      <ThemeProvider theme={theme}>
          <div style={{ marginTop: '10%', marginBottom: '5%'}}>
            <ThemeProvider theme={innerTheme}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="password" type="password" label="Senha" variant="outlined" />
              </Box>
            </ThemeProvider>
          </div>
          <div style={{ marginBottom: '10%'}}>
            <Button className='button' variant='contained'>ACESSAR</Button>
          </div>

          <div style={{ marginBottom: '10%'}}>
            <img alt="Cadastro realizado com sucesso!" src='https://res.cloudinary.com/app-temsaida/image/upload/v1643532844/woman-img_fovrti.png' />
          </div>
      </ThemeProvider>
    </div>
  );
}

export default Login;
