import React, { useMemo } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderComp = () => {
  const [value, setValue] = useState(new Date());
  const [view,setView]=useState("month")
  const onChangeDate=(val)=>{
    setView(val)
  }
  console.log("date is ",value)
  console.log("view is ",view)

  useMemo(()=>{},[])
  return (
    <>
        <div>
        <Calendar  onChange={(v)=>setValue(v)} value={value} view={view} />
      </div>
      <div>
        <button onClick={() => onChangeDate("decade")}>Year</button>
        <button onClick={() => onChangeDate("year")}>Month</button>
        <button onClick={() => onChangeDate("month")}>Day</button>
      </div>
    </>
  );
};

export default CalenderComp;
