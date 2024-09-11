import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


// Assuming i  have a Mongoose model called 'user'
export const findActiveUsers = async (req,res) => {
  try {
    const previousWeek = new Date();
    previousWeek.setDate(sevenDaysAgo.getDate() - 7);

    const data = await user.find({
      status: "active",
      created_at: { $gte: sevenDaysAgo }
    });
    return res.status(200).json(
        new ApiResponse(200, data, " products gets successfull")
    );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export {findActiveUsers}