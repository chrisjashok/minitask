import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

type Props = {
    label?:string
}

function CustomCheckBox({label}: Props) {
  return (
    <div>
        <FormControlLabel className='checkbox' control={<Checkbox />} label={label} />
    </div>
  )
}

export default CustomCheckBox