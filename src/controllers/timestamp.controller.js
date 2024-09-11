export const addTimestamp = (req, res) => {
    try {
        const data = req.body;

     
        if (!data || typeof data !== 'object') {
            return res.status(400).json(
                new ApiResponse(400, null, "Invalid  data")
            );
        }

        
        data.timestamp = new Date().toISOString();

     
        return res.status(200).json(
            new ApiResponse(200, data, "Timestamp added successfully")
        );
        
    } catch (error) {

        throw new ApiError(500, error.message);
    }
};

export {addTimestamp}