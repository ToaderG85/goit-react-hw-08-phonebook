import React from "react";
import NotFoundImg from './NotFoundImg.png';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";


export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Box 
      sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,          
        }}>
      <img src={NotFoundImg} alt="Not Found" />
      <Typography sx={{
        display: 'flex',
        justifyContent: 'center',          
        }}>
          Ruta nu exista. 404</Typography>
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
            onClick={handleRedirect}>
            Inapoi la pagina principala!
          </Button>
    </Box>
  );
}