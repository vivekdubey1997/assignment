import Product from "../model/productModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


 const findActiveProducts = async (req,res) => {
  try {
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)

const getLastWeekProducts = await Product.find({
  status: "Active",
  createdAt: {
    $gte: sevenDaysAgo, 
    $lte: today 
  }
})

    return res.status(200).json(
        new ApiResponse(200, getLastWeekProducts, " products gets successfull")
    );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export {findActiveProducts}