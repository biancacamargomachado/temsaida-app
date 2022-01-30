import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import theme, { innerTheme } from '../utils/theme';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../components/styles/header.css';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import '../App.css';


function SignIn() {

  const [age, setAge] = React.useState('');
  const [declaration, setDeclaration] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeDeclaration = (event) => {
    setDeclaration(event.target.value);
  };

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <div className='header-img-container'>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img alt="Logo tem saida" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643525901/logo-xs_am5u1k.png" />
          </Link>
        </div>
        <div className='header-custom'>
          <h4>PREENCHA OS DADOS PARA REALIZAR O CADASTRO</h4>
        </div>

        <ThemeProvider theme={innerTheme}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="name" label="Nome Completo" variant="outlined" />
            <TextField id="cpf" label="CPF" variant="outlined" />
            <TextField id="rg" label="RG" variant="outlined" />
            <TextField id="sexo" label="Sexo" variant="outlined" />
            <TextField id="data_nasc" label="Data de Nascimento" variant="outlined" />
            <TextField id="telefone" label="Telefone" variant="outlined" />

            <FormControl fullWidth>
              <InputLabel id="pcd-input-label">PCD</InputLabel>
              <Select
                labelId="pcd-input-label"
                id="pcd-select"
                value={age}
                label="PCD"
                onChange={handleChange}
              >
                <MenuItem value={10}>Sim</MenuItem>
                <MenuItem value={20}>Não</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="declaracao-input-label">Auto Declaração</InputLabel>
                <Select
                  labelId="declaracao-input-label"
                  id="declaracao-select"
                  value={declaration}
                  label="Auto Declaração"
                  onChange={handleChangeDeclaration}
                >
                  <MenuItem value={10}>Negra/Preta</MenuItem>
                  <MenuItem value={20}>Parda</MenuItem>
                  <MenuItem value={30}>Branca</MenuItem>
                  <MenuItem value={40}>Outro</MenuItem>
                </Select>
            </FormControl>

            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" type="password" label="Senha" variant="outlined" />
          </Box>
        </ThemeProvider>

        <div style={{ 'margin-top': '40px', 'margin-bottom': '20px' }}>
          <img alt="Você vive uma ou mais situaçãos descritas a seguir?" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643530626/text-signin_2_i2jiua.png" />
        </div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Violência física"/>
          <FormControlLabel control={<Checkbox />} label="Violência sexual" />
          <FormControlLabel control={<Checkbox />} label="Violência psicológica" />
          <FormControlLabel control={<Checkbox />} label="Violência moral" />
          <FormControlLabel control={<Checkbox />} label="Violência virtual" />
          <FormControlLabel control={<Checkbox />} label="Violência patrimonial" />
          <FormControlLabel control={<Checkbox />} label="Outro tipo de violência" />
        </FormGroup>

        
        <div style={{ 'margin-top': '20px', 'margin-bottom': '20px', 'max-width': '280px', 'color': '#461D6C', textAlign: 'left' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Ao processequir voce concorda com os termos de serviço e politica de privacidade"/>
          </FormGroup>
        </div>

        <div className='lastButton'>
          <Link style={{ textDecoration: 'none' }} to="/main">
            <Button className='button' variant="contained">CADASTRAR</Button>
          </Link>
        </div>
      </ThemeProvider>
     </div>
  );
}

export default SignIn;
