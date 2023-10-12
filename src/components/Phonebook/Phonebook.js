import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";

import { useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Box, Button, Typography } from '@mui/material';

import { selectIsAuthenticated } from 'redux/selectors';
import { logout } from 'redux/operations';


export const Phonebook = () => {
 const contacts = useSelector(getContacts) ;
 const dispatch = useDispatch();
 const isAuth = useSelector(selectIsAuthenticated)
 const navigate = useNavigate();
 
 const handleLogout = () => {
  dispatch(logout());
  navigate("/goit-react-hw-08-phonebook");
  };

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',       
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        width: 400,
        
      }}
    >
        {isAuth ? <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 1,
          }}>
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ mt: 5, mb: 0 }}>
            Phonebook
          </Typography>
          <ContactForm/>
          <ContactFilter />
          <ContactList contacts={contacts} />  
          <Button
            sx={{
              margin: "auto",
              paddingY: 1,
              paddingX: 5,
              color: '#000',
              backgroundColor: '#0093E9',
              backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
              fontSize: '14px',
              fontWeight: 400,
              textDecoration: 'none',            
              borderRadius: 2,
              minHeight: 12,
              minWidth: 200,
              '&:hover': {
                backgroundColor: '#ffffff',                
                border: 1,
              },
            }} 
            variant="contained" 
            onClick={handleLogout}>
            Logout
          </Button>
                    
        </Box> : <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div />
          <Button variant="contained" onClick={() => navigate("/")}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>              
      </Box>}
    </div>
  );
};
