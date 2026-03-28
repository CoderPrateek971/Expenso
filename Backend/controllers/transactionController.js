const Transaction = require('../models/Transaction');

exports.getTransaction = async (req,res)=>{
  try{
  const transaction = await Transaction.find({userId: req.user.id});

  console.log("REQ.USER:", req.user);
    res.status(200).json({
      success : true,
      data : transaction
    });

    console.log("DATA RETURNED:", transaction);

  }catch(error){
    res.status(500).json({
      success:false,
      message: "server error"
    });
  }
};

exports.addTransaction= async (req,res)=>{
  try{
    const {text,amount}=req.body;
    const transaction = await Transaction.create({
      text,
      amount,
      userId: req.user.id 
    });
    res.status(201).json({
      success:true,
      data: transaction
    });
  }catch(error){
    res.status(400).json({
      success:false,
      message:"Invalid input"
    });
  }
};
exports.deleteTransaction = async (req,res)=>{
  try{
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      userId: req.user.id 
    });
    if(!transaction){
      res.status(404).json({
        success:false,
        message:"Not found"
      });

    }
    await transaction.deleteOne();
    res.status(200).json({
      success:true,
      message:"Deleted succesfully"
    });
  }catch(error){
    res.status(500).json({
      success:false,
      message:"server error"
    });
  }
}