import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function CalenderComp2() {
  const [date, setDate] = React.useState(dayjs(new Date()));
  const [view, setView] = React.useState(["year","month","day"]);
  const [label,setlabel]=React.useState("year,month and day")
  const [active,setActive]=React.useState("day")
  const onChangeDate = (val) => {
    if(val==="month"){
        setView(["month","year"])
        setlabel("month and year")
        setActive("month")
    }else if(val==="year"){
        setView(["year"])
        setlabel("year")
        setActive("year")
    }else{
        setView(["year","month","day"])
        setlabel("year,month and day")
        setActive("day")
    }
  };

  return (
    <div className="date-container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker value={date} label={label} views={view} /> 
        </DemoContainer>
      </LocalizationProvider>

      <div>
        <button className={active==="day"?"active":""} onClick={() => onChangeDate("day")}>Day</button>
        <button className={active==="month"?"active":""} onClick={() => onChangeDate("month")}>Month</button>
        <button className={active==="year"?"active":""} onClick={() => onChangeDate("year")}>Year</button>
      </div>
    </div>
  );
}


// export default function CalenderComp2() {
//     const [date, setDate] = React.useState(dayjs(new Date()));
//     const [view, setView] = React.useState("day");
//     const onChangeDate = (val) => {
//       setView(val);
//     };
//     return (
//       <>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={["DatePicker"]}>
//             {view === "day" ? (
//               <DatePicker
//                 value={date}
//                 label={"year, month and day"}
//                 views={["year", "month", "day"]}
//                 onChange={(e) => setDate(e)}
//               />
//             ) : view === "month" ? (
//               <DatePicker
//                 value={date}
//                 label={"month and year"}
//                 views={["month", "year"]}
//                 onChange={(e) => setDate(e)}
//               />
//             ) : (
//               <DatePicker
//                 value={date}
//                 label={"year"}
//                 views={["year"]}
//                 onChange={(e) => setDate(e)}
//               />
//             )}
//           </DemoContainer>
//         </LocalizationProvider>
//         <div>
//           <button onClick={() => onChangeDate("day")}>Day</button>
//           <button onClick={() => onChangeDate("month")}>Month</button>
//           <button onClick={() => onChangeDate("year")}>Year</button>
//         </div>
//       </>
//     );
//   }
