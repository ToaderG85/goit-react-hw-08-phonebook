import React from 'react';

import style from './ContactFilter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsFilterSlice';
 

export default function ContactFilter() {
    
    const dispach = useDispatch();
    const currentFilter = useSelector(getFilter);

    return (
      <div className={style.contact__filter}>
        <label htmlFor={currentFilter}>
          Find contact (name)
          <input
            type="text"
            name="filter"
            onChange={(event) => dispach(setFilter(event.currentTarget.value))}
            value={currentFilter}
          />
        </label>
      </div>
    );
}

