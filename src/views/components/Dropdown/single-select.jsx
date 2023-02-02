import { Box, FormControl, MenuItem, Select } from '@mui/material';
import React from 'react'
import { groupTypeDatas, locationDatas } from '../../../constants';

const SingleSelect = ({ name, width = '600px', required }) => {
  return (
    <div className='text-sm font-barlow-regular'>
      <p >{name} {required && <span className='text-red-600'>*</span>}</p>
      <Box
        sx={{
          "& .MuiInputBase-root": { width: width, marginTop: '4px' },
        }}
      >
        <FormControl fullWidth>
          <Select
            value='Location'
            // onChange={handleChangeRole}
            size='small'
          >
            {groupTypeDatas.map((item, index) => (
              <MenuItem value={item.groupType} key={index}>{item.groupType}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default SingleSelect;