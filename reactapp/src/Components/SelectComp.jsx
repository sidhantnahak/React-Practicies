import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Fragment, useState } from "react";

const array = ["Ten", "Twenty", "Thirty"];
const array2 = ["Ten1", "Twenty2", "Thirty3"];

const SelectComp = () => {
  const [age, setAge] = useState("");
  const check = true;
  return (
    <>
      <FormControl
        // variant="filled"
        sx={{ m: 1, minWidth: "8vmax" }}
        // size="small"
      >
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          label="Age"
        >
          {(
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          ) &&
            check &&
            array.map((e, i) => {
              return (
                <MenuItem value={i + e} key={i}>
                  {e}
                </MenuItem>
              );
            })}
          {check &&
            array2.map((e, i) => {
              return (
                <MenuItem value={i + e} key={i}>
                  {e}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Age</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={(e)=>setAge(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectComp;
