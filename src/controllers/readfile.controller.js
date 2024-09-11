import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createReadStream } from 'fs';
import path from 'path';

const fileService = {
    readFileAsync: (filePath) => {
        return createReadStream(filePath);
    }
};

export const readFile = async (req, res) => {
    try {
        const filePath = req.query.path || process.env.FILE_PATH;
        if (!filePath) {
            throw new ApiError(400, "File path required");
        }

        // Resolve  file path
        const resolvedPath = path.resolve(filePath);
        
  
        const dataStream = fileService.readFileAsync(resolvedPath);

        
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`);

        dataStream.on('data', (chunk) => {
            console.log('Data chunk:', chunk.toString());
        });

        
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

export {readFile}