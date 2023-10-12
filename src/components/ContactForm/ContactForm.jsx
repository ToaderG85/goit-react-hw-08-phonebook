import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Button } from '@mui/material';

export default function ContactForm({onSubmit}) {
    const [name,setName] = useState('');
    const [number,setNumber] =useState('');
    const dispatch = useDispatch();

    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    const handleChange = event => {
        const { name, value } = event.target;
        if ('name' === name) {
          setName(value);
        } else if (name === 'number') {
          setNumber(value);
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addContact({name,number}))
        event.target.reset();
      };


  return (
    <div className={style.contact__form}>
        <h4>New Contact</h4>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type='text'
                    name="name"
                    placeholder='Name'
                    pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={inputNameId}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="tel"
                    name="number"
                    placeholder='Phone number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={inputNumberId}
                    onChange={handleChange}
                />
            </label>
            <Button
            sx={{
              margin: "auto",
              paddingY: 1,
              paddingX: 5,
              color: '#000',
              backgroundColor: 'rgb(4, 165, 79)',
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
            onClick={handleSubmit}>
            Add contact
          </Button>
        </form>
    </div>    
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
