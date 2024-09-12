import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import path from 'path';
import { createReadStream } from 'fs';
import Product from "../model/productModel.js";
import dotenv from 'dotenv';

dotenv.config();

const fileService = {
    readFileAsync: (filePath) => {
        return createReadStream(filePath); 
    }
};

const readFile = async (req, res) => {
    try {
        const filePath = req.query.path || process.env.FILE_PATH;
        if (!filePath) {
            throw new ApiError(400, "File path required");
        }

        // Resolve file path
        const resolvedPath = path.resolve(filePath);

        // Create a read stream
        const dataStream = fileService.readFileAsync(resolvedPath);

        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`);

        // Pipe the data stream to the response
        dataStream.pipe(res);

        // Handle stream errors
        dataStream.on('error', (error) => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
        });
    }
};

export { readFile };
