import { Theme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => (
    {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
            boxSizing: "border-box"
        },
        item: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            color: lightGreen[900],
            textAlign: "center"
        },
        contentBox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
            [theme.breakpoints.down("sm")]: {
                width: "80%"
            }
        }
    }
))