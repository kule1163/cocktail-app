import {makeStyles} from "@mui/styles"
import {lightGreen} from "@mui/material/colors"
import { letterSpacing } from "@mui/system"
import { Theme } from "@mui/material"

export const useStyles = makeStyles((theme:Theme) => (
    {
        detailBox: {
            display: "flex",
            alignItems: "center",  
            marginTop: "5rem",
            overflowWrap: "break-word",
            padding: "5rem",
            boxSizing: "border-box",
            [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                padding: "3rem",
                marginTop: "3rem"
            },
            [theme.breakpoints.down("md")]: {
               
                padding: "1rem",
               
            },
        },
        item: {
            display: "flex"
        },
        imageBox: {
    
            height: "30vw",
            width: "100%",
            [theme.breakpoints.down("lg")]: {
                height: "80vh",
                width: "auto",
                marginBottom: "3rem"
            },
            [theme.breakpoints.down("sm")]: {
                height: "50vh",
                width: "auto",
                marginBottom: "3rem"
            }
        },
        image: {
            objectFit: "cover",
            width: "100%",
            height: "100%",
        },
        contentBox: {
            display: "inline-flex",
            minWidth: "auto",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "3rem",
            boxSizing: "border-box",
            [theme.breakpoints.down("lg")]: {
                marginLeft: "0"
            }
        },
        contentRowBox: {
            overflowWrap: "break-word",
            flexWrap: "wrap",
            wordWrap: "break-word",
            "&:not(:last-child)": {
                marginBottom: "1rem"
                
            },
            display: "inline-flex",
            alignItems: "start",
        },
        fixedBox:{
            flexShrink: "0",            
        },
        fixedText: {
            color: `${lightGreen[900]} !important`,
            backgroundColor: `${lightGreen[200]} !important`,
            padding: ".5rem 1rem",
            borderRadius: "5px",
            fontWeight: "bolder",
            flexShrink: "0",
        },
        contentText: {
            marginLeft: "1rem !important",
            display: "flex",
            marginTop: ".5rem !important",
            overflowWrap: "break-word",
            wordWrap: "break-word",
        },
        textHeader: {
            color: lightGreen[900],
            letterSpacing: "5px !important"
        }
    }
))