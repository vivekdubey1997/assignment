import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Product from "../models/Product.js"; // Make sure to import Product

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        // get all products from the "products" collection
        const products = await Product.find({});
        return res.status(200).json(
            new ApiResponse(200, products, "Products fetched successfully")
        );
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Pagination the result
export const pagination = async (req, res) => {
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

export {getAllProducts,pagination}