import React from 'react'
import {Grid} from "@mui/material"
import Items from '../../components/homeComp/items/Items'
import Searchbar from '../../components/search/Searchbar'


const Home = () => {
  return (
    <Grid container justifyContent="center">
        <Searchbar />
        <Grid  item xs={10}>
          <Items />
        </Grid>
    </Grid>
  )
}

export default Home