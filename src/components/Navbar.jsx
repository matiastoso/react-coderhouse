import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import CartWidget from './CartWidget';

export default function ButtonAppBar() {
    const enlaces = ["Home", "Categorías", "Nosotros"];

    return (
    <header className='header'>
        <div className="logo">
            <Typography variant='h4' sx={{ fontStyle: "italic" }}>todoSport</Typography>
        </div>

        <nav className='nav'>
            {
                enlaces.map( (enlace, i) => {
                    return <a key={i} href='#'> {enlace} </a>
                })
            }
        </nav>
        <CartWidget />
    </header>
  );
}