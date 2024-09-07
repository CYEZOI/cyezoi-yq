import { API, APIRequest, APIResponse } from "@/api";
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
      permission: number,
      lastOnline: Date,
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
          permission: record.getDataValue("permission"),
          lastOnline: record.getDataValue("lastOnline"),
        });
      }
    }).catch((error: Error) => {
      console.error(error.name + "  " + error.message);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("userGetSuccess"), { user: userData });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    if (await token.checkToken(request.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    if (request.params.username && request.params.password && request.params.studentId) {
      await userModule.create({
        username: request.params.username,
        password: request.params.password,
        studentId: request.params.studentId,
      }).then(() => {
        API.success(res, i18n.t("userCreateSuccess"));
      }).catch((error: Error) => {
        console.error(error.name + "  " + error.message);
        API.failure(res, i18n.t("databaseError"));
      });
    }
    else {
      API.failure(res, i18n.t("invalidParameter"));
    }
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized"));
      return;
    }

    if (req.query.userId && typeof req.query.userId == "string") {
      await userModule.destroy({
        where: {
          userId: parseInt(req.query.userId),
        },
      }).then(() => {
        API.success(res, i18n.t("userDeleteSuccess"));
      }).catch((error: Error) => {
        console.error(error.name + "  " + error.message);
        API.failure(res, i18n.t("databaseError"));
      });
    }
    else {
      API.failure(res, i18n.t("invalidParameter"));
    }
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}