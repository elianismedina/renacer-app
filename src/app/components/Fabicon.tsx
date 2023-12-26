import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export default function FloatingActionButtons() {
    return (
      <Box
      sx={{ '& > :not(style)': { m: 1 } }}
      >
        <Fab
        variant="extended"
        className='bg-lime-500 text-white font-bold w-30 h-8 p-2 top-6 text-xs sm:top-96 sm:p-4 sm:w-48 sm:h-12 sm:text-md'
        >
          <FavoriteBorderSharpIcon
          sx={{ mr: 1 }}
          />
          Dona ahora!
        </Fab>
      </Box>
    );
  }
