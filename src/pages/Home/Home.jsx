import { NavLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import { selectIsAuthenticated } from 'redux/selectors';
import { useSelector } from 'react-redux';


export default function Home() {
  const isLoggIn = useSelector(selectIsAuthenticated);
  return (
    <>
      <Box sx={{ textAlign: 'center', marginTop: '200px' }}>
        <Typography variant="h1" align="center" sx={{ mt: 15, mb: 10 }}>
          Phonebook
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2}}>
          <Link
            component={NavLink}
            to={isLoggIn ? '/phonebook' : '/login'}
            variant="h5"
            underline="none"
            sx={{
              paddingY: 1,
              paddingX: 5,
              color: '#fff',
              backgroundColor: '#0093E9',
              backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
              fontSize: '20px',
              fontWeight: 700,
              textDecoration: 'none',            
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000',                
              },
            }}
          >Login</Link>
          <Link
            component={NavLink}
            to={'/register'}
            variant="h5"
            underline="none"
            sx={{
              paddingY: 1,
              paddingX: 5,
              color: '#fff',
              backgroundColor: '#0093E9',
              backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
              fontSize: '20px',
              fontWeight: 700,
              textDecoration: 'none',            
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000',                
              },
            }}
          >Register</Link>
        </Box>        
      </Box>
    </>
  );
}