import React from 'react'
import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '../Icons/search-icon';

const SearchFields = () => {
  return (
    <div>
      <FormControl>
        <TextField
          placeholder="Search by group name..."
          size="small"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{ width: '360px', height: '40px', borderRadius: '4px' }}
        />
      </FormControl>
    </div>
  )
};

export default SearchFields;