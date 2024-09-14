import { API, APIRequest, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { userModule } from "@/database";
import i18n from "@/i18n";
import { token } from "@/token";
import { permission, permission as permission_ } from "@/permission";
import { utilities } from "@/utilities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    const userId: number = await token.checkToken(req.query.token as string) || -1;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const userIdList = req.query.userIdList;

    var userId_query: Array<number> = [];
    if (typeof userIdList === "string") {
      for (const _ of userIdList.split(",")) {
        if (!utilities.isValidNumber(_)) {
          API.failure(res, i18n.t("invalidParameter")); return;
        }
        userId_query.push(parseInt(_));
      }
    }
    if (userId_query.length == 0 && (await permission.getPermission(userId)).checkPermission(permission.PERMISSION_LIST_USER) == false) {
      API.failure(res, i18n.t("permissionDenied")); return;
    }

    var userData: Array<{
      userId: number,
      username: string,
      studentId: number,
      permission: number,
      lastOnline: Date,
    }> = [];
    await userModule.findAll({
      ...userId_query.length > 0 && {
        where: {
          userId: userId_query,
        },
      },
    }).then(records => {
      for (const _ of records) {
        userData.push({
          userId: _.getDataValue("userId"),
          username: _.getDataValue("username"),
          studentId: _.getDataValue("studentId"),
          permission: _.getDataValue("permission"),
          lastOnline: _.getDataValue("lastOnline"),
        });
      }
    });
    API.success(res, i18n.t("userGetSuccess"), { user: userData });
  }
  else if (req.method == "POST") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    const userId: number = await token.checkToken(request.token as string) || -1;
    if (userId === -1) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const username = request.params.username;
    const password = request.params.password;
    const studentId = request.params.studentId;
    const permission = request.params.permission;
    if (typeof username !== "string" || typeof password !== "string" || typeof studentId !== "number" || typeof permission !== "number") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }
    if ((await permission_.getPermission(userId)).checkPermission(permission_.PERMISSION_CREATE_USER) == false) {
      API.failure(res, i18n.t("permissionDenied")); return;
    }

    if ((await userModule.count({
      where: {
        username,
      }
    }))) {
      API.failure(res, i18n.t("userExists"));
    }

    await userModule.create({
      username,
      password,
      studentId,
      permission,
    }).then(() => {
      API.success(res, i18n.t("userCreateSuccess"));
    });
  }
  else if (req.method == "PUT") {
    const request: APIRequest = req.body;
    i18n.changeLanguage(request.lang || "en");
    const userId: number = await token.checkToken(request.token as string) || -1;

    const userIdQuery = request.params.userId;
    if (typeof userIdQuery !== "number") {
      API.failure(res, i18n.t("invalidParameter")); return
    }
    const username = request.params.username;
    const password = request.params.password;
    const studentId = request.params.studentId;
    const permission = request.params.permission;
    if (typeof password === "string") {
      if (userId !== userIdQuery && (await permission_.getPermission(userId)).checkPermission(permission_.PERMISSION_UPDATE_OTHER_PASSWORD) == false) {
        API.failure(res, i18n.t("permissionDenied"));
        return;
      }

      await userModule.update({
        password,
      }, {
        where: {
          userId: userIdQuery,
        },
      }).then(() => {
        API.success(res, i18n.t("userUpdateSuccess"));
      });
    }
    else if (typeof username === "string" && typeof studentId === "number") {
      if (userId !== userIdQuery && (await permission_.getPermission(userId)).checkPermission(permission_.PERMISSION_UPDATE_OTHER_INFO) == false) {
        API.failure(res, i18n.t("permissionDenied"));
        return;
      }

      await userModule.update({
        username,
        studentId,
      }, {
        where: {
          userId: userIdQuery,
        },
      }).then(() => {
        API.success(res, i18n.t("userUpdateSuccess"));
      });
    }
    else if (typeof permission === "number") {
      if ((await permission_.getPermission(userId)).checkPermission(permission_.PERMISSION_UPDATE_PRIVILEGE) == false) {
        API.failure(res, i18n.t("permissionDenied"));
        return;
      }

      await userModule.update({
        permission,
      }, {
        where: {
          userId: userIdQuery,
        },
      }).then(() => {
        API.success(res, i18n.t("userUpdateSuccess"));
      });
    }
    else {
      API.failure(res, i18n.t("invalidParameter"));
    }
  }
  else if (req.method == "DELETE") {
    i18n.changeLanguage(req.query.lang as string || "en");
    if (await token.checkToken(req.query.token as string) == null) {
      API.failure(res, i18n.t("unauthorized")); return;
    }
    const userId = req.query.userId;
    if (typeof userId !== "string" || !utilities.isValidNumber(userId)) {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    await userModule.destroy({
      where: {
        userId,
      },
    }).then(() => {
      API.success(res, i18n.t("userDeleteSuccess"));
    });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}