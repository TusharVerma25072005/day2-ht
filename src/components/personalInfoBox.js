"use client"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function PersonalDetails({
    Department, setDepartment,
    Hostel, setHostel,
    Pref , setPref,
    Name , setName,
    RollNo , setRollNo,
    Email , setEmail
}) {
    


    return <div className='flex flex-col justify-center items-center p-4  w-full '>
        <div className='full flex flex-col justify-center items-center w-2/3 my-4 py-4'>
            <TextField id="outlined-basic"  className="w-full" label="Name" variant="outlined" value={Name} onChange={(e)=>{setName(e.target.value)}}  />
            <br />
            <TextField id="outlined-basic" className="w-full"  label="Roll Number" variant="outlined" value={RollNo} onChange={(e)=>{setRollNo(e.target.value)}} />
            <br />
            <TextField id="outlined-basic" className="w-full"  label="Email" variant="outlined" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
            <br/>
            <DepartmentSelect Department={Department} setDepartment={setDepartment}  />
            <br />
            <HostelSelect Hostel = {Hostel} setHostel={setHostel} />
            <br />
            <PrefRadioButtonsGroup Pref={Pref} setPref={setPref} />
        </div>
    </div>
}



function DepartmentSelect({Department , setDepartment}) {

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box className="w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value={"CSE"}>Computer Science and Engineering</MenuItem>
          <MenuItem value={"ECE"}>Electrical and Communication Engineering</MenuItem>
          <MenuItem value={"EE"}>Electrical</MenuItem>
          <MenuItem value={"AI"}>Artificial Intelligence</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}


function HostelSelect({Hostel , setHostel}) {

  const handleChange = (event) => {
    setHostel(event.target.value);
  };

  return (
    <Box className="w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Hostel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Hostel}
          label="Hostel"
          onChange={handleChange}
        >
          <MenuItem value={"A"}>Dhauladhar</MenuItem>
          <MenuItem value={"B"}>Yamuna</MenuItem>
          <MenuItem value={"C"}>Phase 1</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}


function PrefRadioButtonsGroup({Pref , setPref}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Food Preferences</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Veg"
        name="radio-buttons-group"
        value={Pref}
        onChange={()=>{ setPref(event.target.value)}}
      >
        <FormControlLabel value="Veg" control={<Radio />} label="Veg" />
        <FormControlLabel value="Non-Veg" control={<Radio />} label="Non-Veg" />
      </RadioGroup>
    </FormControl>
  );
}