import { useEffect, useState } from "react";
import axios from "axios";
export const useExpanses = () => {
  const [expenses, setExpenses] = useState(null)


  const getAllExpanses = async () => {
    try {



      const res = await axios.get("http://localhost:9000/api/v1/expanses/");
      setExpenses(res.data.expenses);


    } catch (error) {
      console.log(error);
    }

  }

 

  const createExpanses = async (formData) => {
    try {
      console.log(formData)

      const res = await axios.post("http://localhost:9000/api/v1/expanses/", formData);

      getAllExpanses();

    } catch (error) {
      console.log(error);
    }

  }

  const deleteExpanses = async (id) => {
    try {


      const res = await axios.delete(`http://localhost:9000/api/v1/expanses/${id}`);

      console.log(res);

      getAllExpanses();

    } catch (error) {
      console.log(error)
    }


  }

  // useEffect(()=>{
  //   getAllExpanses();
  // },[]);


  return {
    expenses,
    createExpanses,
    deleteExpanses
  }


}