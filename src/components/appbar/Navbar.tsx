import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Logo from "../../assests/logo.svg"
import { useStyles } from './styles';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const classes = useStyles()
    const navigate = useNavigate()
  
    return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Box className={classes.imageBox}>
                <img className={classes.image} src={Logo}/>
            </Box>
            <Box className={classes.menuItemBox}>
                <Typography onClick={() => navigate("/")} className={classes.menuItemText}>Home</Typography>
                <Typography onClick={() => navigate("/about")} className={classes.menuItemText}>About</Typography>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar