import { makeStyles } from "@mui/styles";
import { lightGreen } from "@mui/material/colors";

export const useStyles = makeStyles({
    imageBox: {
        height: "45vh",
        width: "100%",
        borderRadius: "20px",
    },
    image: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
    },
    contentBox: {
        minHeight: "25vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "1rem",
        paddingBlock: "1rem",
    },
    textDrink: {
        letterSpacing: "10px"
    },
    textGlass: {
        letterSpacing: "6px"
    },
    textAlcholic: {
        color: "gray"
    },
    button: {
        backgroundColor: `${lightGreen[900]} !important`,
        color: "white !important",
        letterSpacing: "3px !important",
        marginBlock: "1rem !important",
        fontWeight: "bolder !important",
        "&:hover": {
            color: `${lightGreen[900]} !important`,
            backgroundColor: `${lightGreen[200]} !important`,
        }
    }
})

