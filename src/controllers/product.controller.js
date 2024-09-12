import { products } from "../Data/products.js";
import Product from "../model/productModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


// Get all products
 const getAllProducts = async (req, res) => {
    try {
        // Get all products from the "products" collection
        const products = await Product.find({});
        return res.status(200).json(
            new ApiResponse(200, products, "Products fetched successfully")
        );
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Pagination the result
 const pagination = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; 
        const skip = limit * (page - 1);
        
        const products = await Product.find({})
            .skip(skip)
            .limit(Number(limit))
            .exec();
        
        // Get total count of documents
        const totalCount = await Product.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);
        
        res.status(200).json(
            new ApiResponse(200, {
                page: Number(page),
                limit: Number(limit),
                totalCount,
                totalPages,
                products,
            }, "Products fetched successfully with pagination")
        );
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};


const insertedProducts = async () => {
    try {
        const insertedProducts = await Product.insertMany(products);
  
        return insertedProducts;
    } catch (error) {
        console.error('Error inserting categories:', error);
        throw error; 
    }
};


//   insertedProducts()
//     .then(categories => {
//         console.log('Inserted Categories:', categories);
//     })
//     .catch(err => {
//         console.error('Failed to insert categories:', err);
//     });
  
// Grouped exports
export { getAllProducts, pagination, insertedProducts };