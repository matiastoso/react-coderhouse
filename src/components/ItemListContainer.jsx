import { Typography } from "@mui/material";

export default function ItemListContainer( {greeting} ) {
    return( <Typography sx={{ mt: 6, ml: 3 }} variant="h2"> {greeting} </Typography> )
}