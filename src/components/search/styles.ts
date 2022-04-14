import { Theme } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles<Theme>((theme) => (
    {
       
        container: {
            marginBlock: "4rem"
        },
        item: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingInline: "3rem"
        },
        mainContainer: {
            width: "40rem",
            boxShadow:"7px 9px 15px -4px rgba(0,0,0,0.45)",
            display: "inline-flex",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            paddingBlock: "1rem",
            backgroundColor: grey[200],
            "&:hover": {
                boxShadow: "7px 9px 15px -1px rgba(0,0,0,0.80)",
            }
        },
        headerBox: {
            width: "90%",
            display: "flex",
            justifyContent: "start",
            [theme.breakpoints.down(500)]: {
                justifyContent: "center",
            }
        },
        headerText: {
            color: lightGreen[900],
            letterSpacing: "3px !important",
            fontSize: "1.2em !important",
            [theme.breakpoints.down("sm")]: {
                fontSize: "1em !important",
                letterSpacing: "2px !important",
            },
            [theme.breakpoints.down(500)]: {
                textAlign: "center !important"
            }
            
        },
        searchBar: {
            width: "90%",
            height: "35px",
            borderRadius: "5px",
            backgroundColor: "white",
            border: "none",
            zIndex: "10",
            marginTop: ".5rem",
            fontSize: "1.2em",
    
        }
    
    }
))