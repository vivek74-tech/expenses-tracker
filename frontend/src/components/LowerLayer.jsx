import {useNavigate} from "react-router-dom";
function LowerLayer({ expenses ,deleteExpanses }) {
 

  const navigate = useNavigate();
  
   
 
     
  
  return (
    <div className='border-t-1'>
      <p className="text-2xl font-black ml-7">Transactions</p>
      {
        expenses?.map((item) => {
          return (<div key={item._id} className='grid grid-cols-7 gap-1 max-w-4xl mx-auto'>
            <div>
              {item.title}
            </div>
            <div>
              {item.amount}
            </div>
            <div>
              {item.category}
            </div>
            <div>
              {item.type}
            </div>

            <p>
              {new Date(item.date).toLocaleDateString("en-IN", {
               
                timeZone: "UTC",
              })}
            </p>

            <div>
              {item.description}
            </div>

            <div className="flex mr-2 m-2">
              <button onClick={()=>{
                navigate(`/view/${item._id}`);
              }} className='mr-3 bg-green-700 pl-4 pr-4 pt-2 pb-2 rounded-sm text-white'>View</button>
              <button onClick={()=>{
                 deleteExpanses(item._id);
              }} className='mr-3 bg-red-700 pl-4 pr-4 pt-2 pb-2 rounded-sm text-white'>Delete</button>
            </div>
          </div>)
        })
      }

    </div>
  )
}

export default LowerLayer