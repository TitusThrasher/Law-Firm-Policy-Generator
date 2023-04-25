import React from 'react';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

export default function CustomTextField({ label, helperText, name, value = '', onChange }) {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <Tooltip title={helperText} arrow>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </Tooltip>
  );
}
