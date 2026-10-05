import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useExpanses = () => {
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState(null)
  const [summary, setSummary] = useState({});
  const [categoryData, setCotegoryData] = useState({
      foodAmount: 0,
      travelAmount: 0,
      shoppingAmount: 0,
      billsAmount: 0,
      educationAmount: 0,
      entertainmentAmount: 0
    })
  const getSummary = async () => {
    setLoading(true)
    try {


      const res = await axios.get("http://localhost:9000/api/v1/expanses/summary");

      setSummary(res.data);

    } catch (error) {


      console.log(error);


    } finally {
      setLoading(false);
    }



  }

  const categoryAndExpenses = async () => {
   
    try {
      const res = await axios.get("http://localhost:9000/api/v1/expanses/category");
      setCotegoryData({
        ...categoryData,
        foodAmount: res.data.foodAmount,
        travelAmount: res.data.travelAmount,
        shoppingAmount: res.data.shoppingAmount,
        billsAmount: res.data.billsAmount,
        educationAmount: res.data.educationAmount,
        entertainmentAmount: res.data.entertainmentAmount,
      });


    } catch (error) {
      console.log(error)
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
      await categoryAndExpenses();

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
      await categoryAndExpenses();

    } catch (error) {
      console.log(error)
    }


  }







  // only loading par chale ga state change hone aur page render par nahi chale ga
  useEffect(() => {
    getAllExpanses()
    getSummary()
    categoryAndExpenses()
  }, []);




  return {
    expenses,
    createExpanses,
    deleteExpanses,
    getAllExpanses,
    getSummary,
    summary,
    loading,
    categoryData



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
