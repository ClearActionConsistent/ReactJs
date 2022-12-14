import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = () => {
  return (
    <div className='mt-10 flex justify-end'>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  )
}

export default Paginations