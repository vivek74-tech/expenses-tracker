import { Link, useParams } from "react-router-dom";
import { useExpansesById } from "../hooks/expenses.api.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function View() {
   const navigate = useNavigate();
  const { expense, getByIdExpanses, deleteByIdExpanses, loading } = useExpansesById();

  const { id } = useParams();



  useEffect(() => {
    getByIdExpanses(id)
  }, []);

  const deleteHandler = () => {
    deleteByIdExpanses(id);
  }

 



  return (
    <div className='flex item-center justify-center    '>
      {
        loading ?"Loading...": <div key={id} className='flex item-center justify-center flex-col w-60  border-2 p-4 '>
          <div className="text-2xl m-2">
            {expense?.title}
          </div>
          <div className="text-2xl m-2">
            {expense?.amount}
          </div>
          <div className="text-2xl m-2">
            {expense?.category}
          </div>
          <div className="text-2xl m-2">
            {expense?.type}
          </div>

          <p className="text-2xl m-2">
            {new Date(expense?.date).toLocaleDateString("en-IN", {

              timeZone: "UTC",
            })}
          </p>

          <div className="text-2xl">
            {expense?.description}
          </div>

          <div className="flex item-center ">
            <button onClick={()=>{
              navigate(`/update/${id}`)
            }} className='mr-3 bg-green-700 pl-4 pr-4 pt-2 pb-2 mt-2 rounded-sm text-white'>Update</button>
            <button onClick={deleteHandler}

              className='mr-3 bg-red-700 pl-4 pr-4 pt-2 pb-2 rounded-sm text-white mt-2'>Delete</button>

              <div>
                 <Link to="/">Back Home</Link>
              </div>
             
          </div>
        </div>}
    </div>
  )
}

export default View;