import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function InputComp({field,values,handleBlur,handleChange}) {
  return (
    <Box>
       <FormControl fullWidth>
                    <InputLabel id={field.name}>{field.label}</InputLabel>
                    <Select
                      name={field.name}
                      labelId={field.name}
                      id={field.name}
                      value={values[field.name]}
                      label={field.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {field.options?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
           
    </Box>
  )
}

export default InputComp
