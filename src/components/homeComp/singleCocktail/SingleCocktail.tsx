import React from 'react'
import { useStyles } from './styles'
import { Box, Typography, Button } from "@mui/material"
import { Cocktail } from '../../../utils/types'
import {useNavigate} from "react-router-dom"

interface SingleCocktailProps {
    item: Cocktail
}

const SingleCocktail = ({item}: SingleCocktailProps) => {

    const navigate = useNavigate()
    const classes = useStyles()

    return (
        <>
            <Box className={classes.imageBox}>
                <img className={classes.image} src={item.strDrinkThumb} />
            </Box>
            <Box className={classes.contentBox}>
                <Typography className={classes.textDrink} variant="h4">{item.strDrink}</Typography>
                <Typography className={classes.textGlass} variant='h6'>{item.strGlass}</Typography>
                <Typography className={classes.textAlcholic} variant="body1">{item.strAlcoholic}</Typography>
                <Box>
                    <Button onClick={() => navigate(`/detail/${item.idDrink}`)} className={classes.button}>DETAILS</Button>
                </Box>
            </Box>
        </>
    )
}

export default SingleCocktail