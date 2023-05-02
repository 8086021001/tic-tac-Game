import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import './landing.css'


let images = "https://th.bing.com/th/id/OIP.ieEn7HgBnqdX_cB5_fJx1AHaHa?pid=ImgDet&rs=1"
let backgroundImage = "https://www.bing.com/images/search?view=detailV2&ccid=U6UdfAJp&id=DA9A40D110E238A8B44A4E7A94E5C9F45347E836&thid=OIP.U6UdfAJp62_Dr2rg2tuUFQHaDt&mediaurl=https%3a%2f%2fwww.codester.com%2fstatic%2fuploads%2fitems%2f1612%2fpreview-xl.jpg&exph=800&expw=1600&q=tic+tac+toe+game+logo&simid=608041316605821134&FORM=IRPRST&ck=B725CF59385E5938ED7C1B5FEFD1E120&selectedIndex=27"


export default function Landing() {


    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tic-Tac
          </Typography>
          <Button style={{backgroundColor:'white', fontSize:20}} className='gameBut'><Link to='/game'>Start</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div>
        <h1>Welcome to Tic-Tac-Toe </h1>
        <div className='container' style={{backgroundImage:backgroundStyle}}>
        <img src={images} alt="Tic Tac Toe logo"/>
        <button className='btn'> <Link to='/game'>Start</Link></button>
        </div>
    </div>

    </>
  );
}
