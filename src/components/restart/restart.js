import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

export default function Restart({winner,stat}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    if(winner){
        setOpen(true)
    }
  },[winner])



  const handleClose = () => setOpen(false);
  const handleRestart = ()=>{
    window.location.reload();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Heyyy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {stat}
          </Typography>
          <Button onClick={handleRestart}>Restart Game</Button>
        </Box>
      </Modal>
    </div>
  );
}
