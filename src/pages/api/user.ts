import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { userModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    var userIdList: Array<number> = [];
    if (req.query.userIdList && typeof req.query.userIdList == "string") {
      for (const userId of req.query.userIdList.split(",")) {
        const userIdNumber = parseInt(userId);
        if (isNaN(userIdNumber) || userIdNumber < 0 || userIdNumber == Infinity) {
          API.failure(res, "Invalid user");
          return;
        }
        userIdList.push(userIdNumber);
      }
    }
    var userData: Array<{
      userId: number,
      username: string,
      studentId: number,
    }> = [];
    await userModule.findAll({
      ...userIdList.length > 0 && {
        where: {
          userId: userIdList,
        },
      },
    }).then(records => {
      for (const record of records) {
        userData.push({
          userId: record.getDataValue("userId"),
          username: record.getDataValue("username"),
          studentId: record.getDataValue("studentId"),
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("userGetSuccess"), { user: userData });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}