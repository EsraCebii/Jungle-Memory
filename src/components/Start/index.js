import React from 'react';
import "./style.css";
import Button from '@mui/material/Button';

function Start ({handleClick}) {
    return (

        <div className="start">
           <h1 className="start"> Click to start </h1>
           <div className="cl">
            <Button variant="contained" size="large" color="error" onClick={handleClick} >Click Me</Button>
            </div>
        </div>
    )
}

export default Start 
