import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from "@material-ui/core/Button";
import "./style.css";

function Finish({ kazandı, handleRestart, showModal, bestScore, puan }) {
   

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleRestart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box" >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {kazandı ? "Hurray ! You completed the game on time !!" : "Oh My God !! Time is Up."}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your score : {puan}  Your best score is: {bestScore}
                    </Typography>
                    <Button onClick={handleRestart}
                    className="button">Restart</Button>
                </Box>
                
            </Modal>
        </div>
    )
}

export default Finish
