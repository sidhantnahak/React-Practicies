import "./App.css";
import CalenderComp from "./Components/CalenderComp";
import CalenderComp2 from "./Components/CalenderComp2";
import SelectComp from "./Components/SelectComp";
import Sidebar from "./Components/SidebarComp";
import UseMemo from "./Components/UseMemo";
import WebSocketComp from "./Components/WebSocket";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import WebSocket2 from "./Components/WebSocket2";

function App() {
  return (
    <div className="app">
      {/* <UseMemo/> */}
      {/* <WebSocketComp/> */}
      {/* <WebSocket2/> */}

      <SelectComp/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalenderComp2/>}/>

      </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
