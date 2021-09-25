import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>
      <h1> Jungle Memory </h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            <IconButton aria-label="fingerprint"  onClick={handleRestart}>
              <RefreshIcon color="secondary" sx={{ fontSize: 40 }}/>
            </IconButton>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;