import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Grid, Box, Typography, Button } from "@mui/material"
import axios from 'axios'
import { log } from 'console'
import { Cocktail } from '../../../utils/types'
import { InputValueContext } from '../../../Context'
import {useStyles} from "./styles"
import SingleCocktail from '../singleCocktail/SingleCocktail'

const Items = () => {

    const {state} = useContext(InputValueContext)

    const classes = useStyles()

    const [cocktails, setCocktails] = useState<Cocktail[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getCocktails = async () => {
        setLoading(true)
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php", { params: { s: state.value } })
            .then(res => {
                setLoading(false)
                setCocktails(res.data.drinks)       
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCocktails()
    }, [state.value])

    return (
        <>
            {loading ? (
                <p>loading...</p>
            ) : (
                <div style={{display: "flex"}}>
               {cocktails && (
                    <Grid className={classes.container} spacing={4} container>
                    {cocktails.map(item => (
                        <Grid  justifyContent="space-between" className={classes.item} key={item.idDrink} item xs={12} md={6} lg={4} >
                            <Box className={classes.cocktailBox}>
                               <SingleCocktail item={item}/>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
               )}
              </div>
            )}
        </>
    )
}

export default Items