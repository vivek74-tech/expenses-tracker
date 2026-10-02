import Navbar from "./Navbar";
import UpperLayer from "./UpperLayer";
import MiddleLayer from "./MiddleLayer";
import LowerLayer from "./LowerLayer";
import { useExpanses } from "../hooks/expenses.api.js";
function Body() {
  const {expenses , createExpanses ,deleteExpanses} = useExpanses();
  return (
    <div>
      <Navbar/>
      <UpperLayer/>
      <MiddleLayer createExpanses={createExpanses}/>
      <LowerLayer expenses={expenses} deleteExpanses={deleteExpanses}/>
    </div>
  )
}

export default Body