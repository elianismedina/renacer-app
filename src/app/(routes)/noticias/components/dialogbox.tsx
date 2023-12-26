import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { type TransitionProps } from "@mui/material/transitions";
import ShareIcon from "@mui/icons-material/Share";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const shareUrl = "https://renacer-app.vercel.app/noticias";

export default function Dialogbox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <ShareIcon />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Compartir en redes sociales"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Comparte esta noticia en tus redes sociales favoritas.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={48} />
            </FacebookShareButton>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
