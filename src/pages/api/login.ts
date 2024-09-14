import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { tokenModule, userModule } from "@/database";
import i18n from "@/i18n";
import { permission } from "@/permission";
import { token } from "@/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    var username = req.query.username;
    var password = req.query.password;
    if (typeof username !== "string" || typeof password !== "string") {
      API.failure(res, i18n.t("invalidParameter")); return;
    }

    var userId: number = 0;
    await userModule.findOne({
      where: {
        username,
        password,
      },
    }).then(user => {
      if (!user) {
        API.failure(res, i18n.t("userNotFound"));
        return;
      }
      else if (new permission(user.getDataValue("permission")).checkPermission(permission.PERMISSION_LOGIN) == false) {
        API.failure(res, i18n.t("permissionDenied"));
        return;
      }
      userId = user.getDataValue("userId");
    });
    API.success(res, i18n.t("loginSuccess"), { userId, token: await token.createToken(userId) });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
