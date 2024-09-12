import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

 const addTimestamp = (req, res) => {
    try {
        const data = req.body;

        if (!data || typeof data !== 'object') {
            return res.status(400).json(
                new ApiResponse(400, null, "Invalid  data")
            );
        }

        data.timestamp = new Date().toISOString();

console.log("hello", JSON.stringify(data,'',2))
        return res.status(200).json(
            new ApiResponse(200, data, "Timestamp added successfully")
        );
        
    } catch (error) {

        throw new ApiError(500, error.message);
    }
};

export {addTimestamp}