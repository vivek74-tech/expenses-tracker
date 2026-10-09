import Navbar from "./Navbar";
import UpperLayer from "./UpperLayer";
import MiddleLayer from "./MiddleLayer";
import LowerLayer from "./LowerLayer";
import { useExpanses } from "../hooks/expenses.api.js";
import Chart from "../components/Chart.jsx";
import Pie from "./Pie.jsx";
import BaChart from "./BaChart.jsx";

import LineChar from "./LineChar.jsx";

function Body() {
  
  const {expenses , createExpanses ,deleteExpanses  ,summary ,loading ,categoryData} = useExpanses();
 

 

  
   
 

 
 
  return (
    <div>
      <Navbar/>
      <LineChar/>
      {/* <BaChart/> */}
      <Chart categoryData={categoryData}/>
      <Pie/>
      <UpperLayer summary={summary} loading={loading}/>
      <MiddleLayer createExpanses={createExpanses}/>
      <LowerLayer expenses={expenses} deleteExpanses={deleteExpanses}/>
    </div>
  )
}

export default Body