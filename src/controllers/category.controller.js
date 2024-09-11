import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Assumed i   have a category model
export const getCategoryCounts = async (req,res) => {
  try {
    const aggregateCategory = await category.aggregate([
      {
        $group: {
          _id: "$category",    
          totalCount: { $sum: 1 }  
        }
      }
    ]);
    if(!result){
        throw new ApiError(400, "can not get the aggregateData");
    }
    return res.status(200).json(
        new ApiResponse(200, aggregateCategory, " successfull")
    );
 
  } catch (error) {
    throw new ApiError(500, error.message);
   
  }
};
export {getCategoryCounts}



