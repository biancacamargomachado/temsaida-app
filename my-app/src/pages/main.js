import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme, { innerTheme } from '../utils/theme';
import Button from '@mui/material/Button';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import '../components/styles/header.css';
import '../App.css';


function Main() {
  const [status, setStatus] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const customButtonStyle = { height: 52, textAlign: 'left', alignItems: 'left', justifyContent: 'left' };

  React.useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setDone(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const returnStatus = React.useCallback(() => {

    if (done)
      return <img alt="Situação do pedido do ofício: não solicitado" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643540931/status-3_sy1hdt.png" />

    if (status)
     return <img alt="Situação do pedido do ofício: não solicitado" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643540588/status2_ufum6n.png" />;
    else
        return <img alt="Situação do pedido do ofício: não solicitado" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643538285/status-1_yximjq.png" />;
  }, [status, done]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className='header-img-container'>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img alt="Logo tem saida" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643525901/logo-xs_am5u1k.png" />
          </Link>
        </div>
        <div className='header-custom-main'>
          <div style={{ padding: 5 }}>
            <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643538660/avatar_alaxud.png" />
          </div>
          <div style={{ padding: 5 }}>
            <h4>PERFIL</h4>
          </div>
        </div>

        <ThemeProvider theme={innerTheme}>
          <div style={{ width: 310 }}>
            {returnStatus()}
            <Stack direction="column" spacing={2}>
                <Button disabled={status} onClick={() => setStatus(!status)} style={customButtonStyle} startIcon={<Inventory2Icon />} variant="contained">
                  Solicitar Ofício
                </Button>
                <Button style={customButtonStyle} startIcon={<DownloadIcon />} variant="contained">
                  <a href="https://res.cloudinary.com/app-temsaida/image/upload/v1643541647/curriculo-maria_ljazct.png" target='_blank' rel="noreferrer">Criar Currículo</a>
                </Button>
                <Button style={customButtonStyle} startIcon={<EditIcon />} variant="contained">
                  Editar Dados
                </Button>
            </Stack>
          </div>
        </ThemeProvider>

        <div style={{ 'margin-top': '40px', 'margin-bottom': '20px' }}>
          <img alt="Localização de postos de atendimento mais próximos de você" src="https://res.cloudinary.com/app-temsaida/image/upload/v1643537841/map-top_grbkek.png" />
          <div className="mapouter"><div class="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Centro%20de%20Atendimento%20%C3%80%20mulher,%20S%C3%A3o%20Paulo%20SP&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>

        <ThemeProvider theme={innerTheme}>
          <div style={{ width: 310, marginBottom: 60 }}>
            <Stack direction="column" spacing={2}>
                <Button style={customButtonStyle} startIcon={<SchoolIcon />} variant="contained">
                  Cursos Gratuitos
                </Button>
                <Button style={customButtonStyle} startIcon={<ContactMailIcon />} variant="contained">
                  Contatos Órgãos e Parceiros
                </Button>
            </Stack>
          </div>
        </ThemeProvider>
      </ThemeProvider>
     </div>
  );
}

export default Main;
