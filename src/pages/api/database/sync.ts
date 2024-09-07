import { API, APIResponse } from "@/api";
import { sequelize } from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>,
) {
    await sequelize.sync({
        alter: true,
    })
    API.success(res, "Synced successfully");
}