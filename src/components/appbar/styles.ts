import { makeStyles } from "@mui/styles";
import {grey, lightGreen} from "@mui/material/colors";
import { Theme } from "@mui/material";


export const useStyles = makeStyles<Theme>((theme) => ({
    
    toolbar: {
        backgroundColor: grey[200],
        display: "flex",
        justifyContent: "space-between",
    },
    menuItemBox: {
        display: "flex",
    },
    menuItemText: {
        color: lightGreen[900],
        fontSize: "1.5em",
        cursor: "pointer",
        "&:not(:last-child)": {
            marginRight: "2rem"
        }
    },
    imageBox: {
        width: "400px",
        [theme.breakpoints.down("md")]: {
            width: "300px"
        },
        [theme.breakpoints.down("sm")]: {
            width: "200px"
        },
        [theme.breakpoints.down(400)]: {
            width: "170px"
        }
    },
    image: {
        objectFit: "cover",
        width: "100%",
        height: "100%"
    },
}))