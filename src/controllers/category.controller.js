import { categoryData } from "../Data/category.js";
import Category from "../model/categoryModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Assumed i   have a category model
const getCategoryCounts = async (req,res) => {
  try {
    const aggregateCategory = await Category.aggregate([
      {
        $group: {
          _id: "$name",    
          totalCount: { $sum: 1 }  
        }
      }
    ]);
    if(!aggregateCategory){
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



export const insertCategories = async () => {
  try {
      // Insert categories into the database
      const insertedCategories = await Category.insertMany(categoryData);

      // Return the inserted categories with timestamps
      return insertedCategories;
  } catch (error) {
      console.error('Error inserting categories:', error);
      throw error; // Rethrow the error for further handling
  }
};


// insertCategories()
//   .then(categories => {
//       console.log('Inserted Categories:', categories);
//   })
//   .catch(err => {
//       console.error('Failed to insert categories:', err);
//   });
