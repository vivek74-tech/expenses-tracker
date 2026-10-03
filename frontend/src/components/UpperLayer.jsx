import axios from "axios";
// import {useExpanses} from "../hooks/expenses.api.js"
// agar components ko rerender karna chahate hai to hamesa data or state parent ke through bhej naho ga
function UpperLayer({summary,loading}) {
   
 

  

  const {totalIncome,totalExpenses,balance} = summary;









  return (
    <div className="p-15 border-b-1">
      {/* grid grid-cols-3 max-w-4xl mx-auto */}
      {
      loading?<h1 className="text-4xl max-w-2xl mx-auto">Loading.....</h1>:<div className=" flex items-center justify-center gap-50 ">
        <div>
          Total Income
          <p>₹{totalIncome}</p>
        </div>
        <div>
          Total Expense
          <p>₹{totalExpenses}</p>
        </div>
        <div>
          Balance
          <p>₹{balance}</p>
        </div>
       

      </div>}

    </div>
  )
}

export default UpperLayer;