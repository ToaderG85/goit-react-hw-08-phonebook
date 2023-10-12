import React, { useEffect, useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/operations";
import { useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/selectors";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuthenticated);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login({ email: email, password: password }));
  };

  useEffect(() => {
    if (isAuth) navigate("/Phonebook");
  }, [isAuth, navigate]);

  return (
    
    <Box>
      <Typography 
            variant="h2" 
            align="center" 
            sx={{ mt: 5, mb: 5, }}>
            Phonebook
      </Typography>
      <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        gap: "20px",
        border: 1,
        margin: "auto",
        width: "100%",
        maxWidth: "300px",        
        padding: "20px",
        boxShadow: "0px 1px 1px rgba(0,0,0,.12), 0px 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16);",
        
      }}
      >
      <TextField
        sx={{
          backgroundColor: '#fff',
          borderRadius: 1,
        }}
        name="email"
        id="outlined-basic"
        placeholder="Email"
        variant="outlined"
        fullWidth
        onChange={handleChangeInput}
      />
      <TextField
        sx={{
          backgroundColor: '#fff',
          borderRadius: 1,
        }}
        type="password"
        name="password"
        id="outlined-basic"
        placeholder="Password"
        variant="outlined"
        fullWidth
        onChange={handleChangeInput}
      />
      <Button 
        sx={{
          margin: "auto",
          paddingY: 1,
          paddingX: 5,
          color: '#fff',
          backgroundColor: 'rgb(4, 165, 79)',
          fontSize: '20px',
          fontWeight: 700,
          textDecoration: 'none',            
          borderRadius: 2,
          minHeight: 15,
          '&:hover': {
            backgroundColor: '#ffffff',                
            border: 1,
            color: '#000',
          },
        }} 
        type="submit" variant="contained">
        Login
      </Button>

      </Box>
      
    </Box>
  );
}