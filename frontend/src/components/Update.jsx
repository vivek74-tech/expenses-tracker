import { useState } from "react";
import { useExpansesById } from "../hooks/expenses.api.js";
import { Link, useParams } from "react-router-dom";
import { useExpanses } from "../hooks/expenses.api.js";
function Update() {
  const { changeExpanses } = useExpansesById();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const {id}=useParams();
  const {getSummary} = useExpanses();
  

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      amount,
      category,
      type,
      date
    }
    changeExpanses(id ,formData);
    getSummary();
    

  }
  return (
    <div className='pb-5 border-t-2'>
      <p className='text-2xl ml-5 mt-0.5 font-bold '>Add Transaction</p>
      <div>
        <form onSubmit={submitHandler} className='grid grid-cols-2 max-w-2xl mx-auto border-2 p-2'>
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm m-2' />
          <label>Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} type="text" value={description} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm m-2' />

          <label>Amount</label>
          <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm m-2' />
          <label >Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm m-2'>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Other</option>

          </select >
          <label >Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm m-2'>
            <option>Income</option>
            <option>Expense</option>
          </select>

          <label >Date</label>
          <input onChange={(e) => setDate(e.target.value)} text="date" value={date} className='mr-3 bg-gray-200 pl-4 pr-4 pt-2 pb-2 rounded-sm' />

          <button type="submit" className='m-4 bg-gray-700 pl-4 pr-4 pt-2 pb-2 rounded-sm text-white m-2 max-w-2xl mx-auto'>Submit</button><span className="text-blue-500 m-4 font-medium text-2xl"><Link to={`/view/${id}`}>Back to view page</Link></span>


        </form>
      </div>
    </div>
  )
}

export default Update