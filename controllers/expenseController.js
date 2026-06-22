const Expense =
require("../models/Expense");

exports.createExpense =
async(req,res)=>{

 const expense =
 await Expense.create(
  req.body
 );

 res.json(expense);

};

exports.getExpenses =
async(req,res)=>{

 const page =
 Number(req.query.page) || 1;

 const limit =
 Number(req.query.limit) || 5;

 const search =
 req.query.search || "";

 const expenses =
 await Expense.find({

  title:{
   $regex:search,
   $options:"i"
  }

 })

 .skip(
  (page-1)*limit
 )

 .limit(limit);

 res.json(expenses);

};

exports.updateExpense =
async(req,res)=>{

 const expense =
 await Expense.findByIdAndUpdate(

  req.params.id,

  req.body,

  {
   new:true
  }

 );

 res.json(expense);

};

exports.deleteExpense =
async(req,res)=>{

 await Expense.findByIdAndDelete(
  req.params.id
 );

 res.json({
  message:"Deleted"
 });

};