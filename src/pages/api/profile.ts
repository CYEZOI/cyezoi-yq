import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";

interface APIResponse {
  success: boolean;
  message?: string;
  data?: any;
}

// 直接实现 token 验证函数，避免导入问题
async function checkToken(tokenValue: string) {
  if (!tokenValue) {
    return null;
  }

  try {
    // 从数据库查询 token
    const query = `
      SELECT t.*, u.studentId, u.username 
      FROM token t 
      JOIN user u ON t.studentId = u.studentId 
      WHERE t.token = ? AND t.isValid = 1
    `;
    const result = await db.all(query, [tokenValue]);

    if (result.length === 0) {
      return null;
    }

    return {
      studentId: result[0].studentId,
      username: result[0].username,
    };
  } catch (error) {
    console.error("Token validation error:", error);
    return null;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  try {
    const { method } = req;
    let tokenValue: string;
    let targetUserId: string | undefined;

    if (method === "GET") {
      tokenValue = req.query.token as string;
      targetUserId = req.query.userId as string | undefined;
    } else if (method === "POST") {
      tokenValue = req.body.token as string;
    } else {
      return res.status(405).json({
        success: false,
        message: "Method not allowed",
      });
    }

    // 验证 token
    if (!tokenValue) {
      return res.status(401).json({
        success: false,
        message: "Token is required",
      });
    }

    const currentUser = await checkToken(tokenValue);
    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    if (method === "GET") {
      try {
        // 确定要获取的用户ID（如果没有指定则为当前用户）
        const userId = targetUserId || currentUser.studentId;

        console.log(
          `获取用户资料: userId=${userId}, currentUser=${currentUser.studentId}`
        );

        // 从数据库获取用户信息
        const userQuery = `
          SELECT studentId, username, description 
          FROM user 
          WHERE studentId = ?
        `;
        const userResult = await db.all(userQuery, [userId]);

        if (userResult.length === 0) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }

        const userData = userResult[0];

        const profileData = {
          userId: userData.studentId.toString(),
          username: userData.username,
          description: userData.description || "# 个人简介\n\n暂无个人简介",
          content: userData.description || "# 个人简介\n\n暂无个人简介",
          currentUserId: currentUser.studentId.toString(), // 返回当前用户ID用于权限判断
        };

        console.log("返回的用户资料:", profileData);

        return res.status(200).json({
          success: true,
          data: profileData,
        });
      } catch (dbError) {
        console.error("Database error:", dbError);
        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }
    } else if (method === "POST") {
      try {
        // 更新用户资料（只能更新自己的资料）
        const { description } = req.body;

        if (typeof description !== "string") {
          return res.status(400).json({
            success: false,
            message: "Description must be a string",
          });
        }

        console.log(
          `用户 ${currentUser.studentId} 尝试更新个人简介:`,
          description
        );

        // 更新数据库中的用户描述
        const updateQuery = `
          UPDATE user 
          SET description = ? 
          WHERE studentId = ?
        `;

        const updateResult = await db.run(updateQuery, [
          description,
          currentUser.studentId,
        ]);

        if (updateResult.changes === 0) {
          return res.status(404).json({
            success: false,
            message: "User not found or no changes made",
          });
        }

        // 获取更新后的用户数据
        const userQuery = `
          SELECT studentId, username, description 
          FROM user 
          WHERE studentId = ?
        `;
        const userResult = await db.all(userQuery, [currentUser.studentId]);

        if (userResult.length === 0) {
          return res.status(404).json({
            success: false,
            message: "User not found after update",
          });
        }

        const userData = userResult[0];

        console.log(
          `用户 ${userData.username}(${userData.studentId}) 成功更新了个人简介`
        );

        return res.status(200).json({
          success: true,
          message: "保存成功",
          data: {
            userId: userData.studentId.toString(),
            username: userData.username,
            description: userData.description,
            content: userData.description,
          },
        });
      } catch (dbError) {
        console.error("Database update error:", dbError);
        return res.status(500).json({
          success: false,
          message: "Failed to update profile",
        });
      }
    }
  } catch (error) {
    console.error("Profile API error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
