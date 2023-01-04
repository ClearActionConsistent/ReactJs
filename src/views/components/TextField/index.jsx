import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TextFields = ({ name, required, value, onChange, ml, type, width = '250px' }) => {
  return (
    <div className='flex items-center text-lg font-serif'>
      <p className='m-2 '>{name} {required && <span className='text-red-600 ml-1'>*</span>}
      </p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: width },
          marginLeft: ml
        }}
        autoComplete="off"
      >
        <TextField
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
        />
      </Box>
    </div>
  )
};

export default TextFields;