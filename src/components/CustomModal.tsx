import {
  Box,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  isOpen?: boolean;
  onClose?: any;
  title?:string
};

interface CustomModal {
  onhandleChange?: (value: string) => void;
}

function CustomModal({ isOpen = false, onClose,title }: Props) {
  return (
    <>
      <Modal open={isOpen} onClose={onClose} className="modal">
        <Box className="modal_box">
          <Grid className="title_box">
            <Typography  className="title_txt" >{title? title : 'User Action'}</Typography>
            <IconButton onClick={onClose} >
              <CloseRoundedIcon />
            </IconButton>
          </Grid>
          
        </Box>
      </Modal>
    </>
  );
}

export default CustomModal;
