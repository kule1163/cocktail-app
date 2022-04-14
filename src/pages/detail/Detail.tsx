import { Grid } from '@mui/material'
import React from 'react'
import CocktailDetail from '../../components/detail/coctailDetail/CocktailDetail'

const Detail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CocktailDetail />
      </Grid>
    </Grid>
  )
}

export default Detail