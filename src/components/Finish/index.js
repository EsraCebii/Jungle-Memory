import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";

const Finish = ({num,kazandı, handleRestart, showModal, bestScore, puan }) => {
  return (
    <div>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2> Jungle Memory Game </h2>
        {kazandı && (
          <DialogTitle id="alert-dialog-title">
          "Hurray ! You completed the game !!"
          </DialogTitle>

        ) }
        {
          !kazandı && (
            <DialogTitle id="alert-dialog-title">
         Oh My God !! Time is Up.
        </DialogTitle>

          )
        }
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your score : {puan}  Your best score is {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
