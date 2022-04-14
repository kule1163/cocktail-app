import { makeStyles } from "@mui/styles";
import { lightGreen } from "@mui/material/colors";

export const useStyles = makeStyles({
    container: {
        /* width: "100% !important", */
       /*  border: "solid red 1px", */
        /* marginInline: "auto !important", */
       /*  display: "flex", */
    },
    item: {
       /*  marginRight: "auto" */
    },
    cocktailBox: {
        minHeight: "70vh",
        boxSizing: "border-box",
        /* width: "200px", */
        boxShadow:"7px 9px 15px -4px rgba(0,0,0,0.45)",
        borderRadius: "20px",
        transition: "all ease 1s",
        "&:hover": {
            
            boxShadow: "7px 9px 15px -1px rgba(0,0,0,0.80)",
        }
    },
    
})