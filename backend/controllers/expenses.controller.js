import { Expanses } from "../models/expanses.modes.js";
export const createExpanses = async (req, res) => {
  const { title, amount, category, type, date, description } = req.body;

  if (!title || !amount || !category || !type || !description || !date) {
    return res.status(401).json({
      success: false,
      message: "required all field"
    })
  }

  const donotRe = await Expanses.findOne({ title });

  if (donotRe) {
    return res.status(409).json({
      success: false,
      message: "existing data"
    })
  }

  const expenses = await Expanses.create({
    title,
    amount,
    category,
    type,
    description,
    date
  });

  return res.status(201).json({
    success: true,
    message: "Expenses created",
    expenses
  });


}

export const getAllExpanses = async (req, res) => {

  const expenses = await Expanses.find();

  if (expenses.length == 0) {
    return res.status(404).json({
      success: false,
      message: "Not found"
    })
  }

  return res.status(200).json({
    success: true,
    message: "all expenses",
    expenses
  })
}

export const getByIdExpanses = async (req, res) => {

  const { id } = req.params;


  const expenses = await Expanses.findById(id);
  if (!expenses) {
    return res.status(404).json({
      success: false,
      message: "Not found"
    })
  }

  return res.status(200).json({
    success: true,
    message: "expenses find by id",
    expenses
  })
}

export const changeExpanses = async (req, res) => {

  const { id } = req.params;
  const { title, amount, category, type, date, description } = req.body;

  const expenses = await Expanses.findByIdAndUpdate(id, { title, amount, category, type, date, description }, { new: true });
  if (!expenses) {
    return res.status(404).json({
      success: false,
      message: "Not found"
    })
  }

  return res.status(200).json({
    success: true,
    message: "expenses update  by id",
    expenses
  })
}

export const deleteExpanses = async (req, res) => {

  const { id } = req.params;


  const expenses = await Expanses.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "expenses successfull deleted",
  })
}


export const getSummary = async (req, res) => {

 try {
   const result = await Expanses.aggregate([
    {


      $group: {
        _id: "$type",
        total: {
          $sum: "$amount"
        }
      }

    }

  ])

  let totalIncome = 0;
  let totalExpenses = 0;

  result.forEach((item) => {
    if (item._id === "Income") {
      totalIncome = item.total;
    }
    if (item._id === "Expense") {
      totalExpenses = item.total;
    }
  });

  const balance = totalIncome-totalExpenses;

  return res.status(200).json({
    totalIncome,
    totalExpenses,
    balance
  })
  
 } catch (error) {
  console.log(error);
 }

}