import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useExpanses = () => {
  const [loading , setLoading] = useState(false);
  const [expenses, setExpenses] = useState(null)
  const [summary, setSummary] = useState({});

    const getSummary = async () => {
      setLoading(true)
    try {


      const res = await axios.get("http://localhost:9000/api/v1/expanses/summary");

      setSummary(res.data);

    } catch (error) {


      console.log(error);


    }finally{
      setLoading(false);
    }



  }

    const getAllExpanses = async () => {
    try {



      const res = await axios.get("http://localhost:9000/api/v1/expanses/");
      setExpenses(res?.data?.expenses);
      

    } catch (error) {
      console.log(error);
    }

  }

  const createExpanses = async (formData) => {
    try {


      const res = await axios.post("http://localhost:9000/api/v1/expanses/", formData);

     await getAllExpanses();
     await getSummary();

    } catch (error) {
      console.log(error);
    }

  }



  const deleteExpanses = async (id) => {
    try {


      const res = await axios.delete(`http://localhost:9000/api/v1/expanses/${id}`);

      console.log(res);

     await getAllExpanses();
     await getSummary();

    } catch (error) {
      console.log(error)
    }


  }







// only loading par chale ga state change hone aur page render par nahi chale ga
  useEffect(()=>{
    getAllExpanses()
    getSummary()
  },[]);

 


  return {
    expenses,
    createExpanses,
    deleteExpanses,
    getAllExpanses,
    getSummary,
    summary,
    loading



  }


}


export const useExpansesById = () => {

  const [expense, setExpenses] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const getByIdExpanses = async (id) => {


    try {

      setLoading(true);


      const res = await axios.get(`http://localhost:9000/api/v1/expanses/${id}`);





      setExpenses(res?.data?.expenses);
      console.log("expenses", expense)



    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }



  }






  const deleteByIdExpanses = async (id) => {

    try {

      const res = await axios.delete(`http://localhost:9000/api/v1/expanses/${id}`);

    } catch (error) {
      console.log(error);

    } finally {
      navigate("/");
    }



  }

  const changeExpanses = async (id, formData) => {

    try {

      const res = await axios.put(`http://localhost:9000/api/v1/expanses/${id}`, formData);
    } catch (error) {

      console.log(error);

    } finally {
      navigate(`/view/${id}`);
    }
  }

  return {
    deleteByIdExpanses,
    getByIdExpanses,
    expense,
    loading,
    changeExpanses,


  }
}
