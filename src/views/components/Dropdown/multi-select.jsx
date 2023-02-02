import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

//fake data sports
const sportDatas = [
  'Golf',
  'Run',
  'Ride',
  'Row',
  'Other',
];

const MultipleSelect = ({ name, required }) => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='text-sm font-barlow-regular'>
      <p >{name} {required && <span className='text-red-600'>*</span>}</p>
      <FormControl sx={{ width: 600 }}>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          sx={{ marginTop: '4px', height: '40px' }}
        >
          {sportDatas.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;