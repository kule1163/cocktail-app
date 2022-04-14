import { Box, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useStyles } from './styles'
import { InputValueContext } from '../../Context'

const Searchbar = () => {
  
    const {dispatch} = useContext(InputValueContext)

    const ref = useRef<HTMLInputElement>(null)

    const classes = useStyles()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({type: "SET_VALUE", payload: e.target.value})
    }
    
    useEffect(() => {
        ref.current?.focus()
    }, [])
  
    return (
    <Grid className={classes.container} container>
        <Grid className={classes.item} item xs={12}>
            <Box className={classes.mainContainer}>
               <Box className={classes.headerBox}>
                 <Typography className={classes.headerText}>Search cocktail by name</Typography>
               </Box>
                <input onChange={(e) => handleChange(e)} ref={ref} className={classes.searchBar}/>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Searchbar