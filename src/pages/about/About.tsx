import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

const About = () => {
    
    const classes = useStyles()
  
    return (
    <Grid className={classes.container} container>
        <Grid className={classes.item} item>
            <Box className={classes.contentBox}>
                <Typography variant='h2' className={classes.headerText}>About Us</Typography>
                <Typography className={classes.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default About