import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Box, Theme } from '@mui/material'
import { useStyles as singleStyles } from '../../homeComp/singleCocktail/styles'
import {useStyles} from "./styles"
import { Cocktail } from '../../../utils/types'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const CocktailDetail = () => {
    const singleClasses = singleStyles()
    const classes = useStyles()
    const [loading, setLoading] = useState<boolean>(true)
    const [cocktail, setCocktail] = useState({} as Cocktail)

    const navigate = useNavigate()
    const strIngredients:string[] = []

    cocktail && Object.entries(cocktail).forEach(item => {
         if(item[0].includes("strIngredient") && item[1] !== null) {
             strIngredients.push(item[1])
         }
     })    

    const { id } = useParams()

    const getCocktail = () => {
        setLoading(true)
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php", { params: { i: id } })
            .then(res => {
                setLoading(false)
                setCocktail(res.data.drinks[0])
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCocktail()
    }, [id])


    return (
       <>
        {loading ? (<p>loading...</p>) : (
            <Grid container>
                <Grid className={classes.item} alignItems="center" justifyContent="center" item xs={12}>
                        <Button onClick={() => navigate("/")} className={singleClasses.button}>BACK HOME</Button>
                </Grid>
                <Grid className={classes.item} alignItems="center" justifyContent="center" item xs={12}>
                    <Typography variant='h4' className={classes.textHeader}>{cocktail?.strDrink}</Typography>
                </Grid>
                <Grid className={classes.item} alignItems="center" justifyContent="center" item xs={12}>
                   <Box className={classes.detailBox}>
                   <Box className={classes.imageBox}>
                        <img className={classes.image} src={cocktail?.strDrinkThumb} />
                    </Box>
                    <Box className={classes.contentBox}>
                        <Box className={classes.contentRowBox}>
                            <Box className={classes.fixedBox}>
                                <Typography className={classes.fixedText}>Name <b>:</b></Typography>
                            </Box>
                            <Typography className={classes.contentText}>{cocktail?.strDrink}</Typography>
                        </Box>
                        <Box className={classes.contentRowBox}>
                            <Typography className={classes.fixedText}>Category <b>:</b></Typography>
                            <Typography className={classes.contentText}>{cocktail?.strCategory}</Typography>
                        </Box>
                        <Box className={classes.contentRowBox}>
                            <Typography className={classes.fixedText}>Info <b>:</b></Typography>
                            <Typography className={classes.contentText}>{cocktail?.strAlcoholic}</Typography>
                        </Box>
                        <Box className={classes.contentRowBox}>
                            <Typography className={classes.fixedText}>Glass <b>:</b></Typography>
                            <Typography className={classes.contentText}>{cocktail?.strGlass}</Typography>
                        </Box>
                        <Box className={classes.contentRowBox}>
                            <Typography className={classes.fixedText}>Instructons <b>:</b></Typography>
                            <Typography sx={{wordBreak: "break-word"}} className={classes.contentText}>{cocktail?.strInstructions}</Typography>
                        </Box>
                        <Box className={classes.contentRowBox}>
                            <Typography className={classes.fixedText}>Ingredients <b>:</b></Typography>
                            {strIngredients.map(item => (
                                <Typography key={item} display="inline-block" className={classes.contentText}>{item}, </Typography>
                            ))}
                        </Box>
                    </Box>
                   </Box>
                </Grid>
            </Grid>
        )}
        </>
    )
}

export default CocktailDetail