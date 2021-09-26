import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import IconButton from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { deepOrange, green } from '@mui/material/colors';
import Box from '@mui/material/Box';




const Header = ({ num, bestScore, handleRestart,puan }) => {
 
  return (
    <div>
      <h1> Jungle Memory </h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Time: </span>
             {num}
          </div>
          <div className="moves">
            <span className="bold">Your Score: </span>
            {puan}
          </div>
          <div className="reshuffle">
            <Box
              sx={{
                '& > :not(style)': {
                  m: 2,
                },
              }}
            >
              <IconButton aria-label="fingerprint" variant="contained" color="success" onClick={handleRestart}>
                <RefreshIcon sx={{ color: deepOrange[500], fontSize: 40, backgroundColor: green }} />
              </IconButton>
            </Box>

          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score: </span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;