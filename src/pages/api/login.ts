import { API, APIResponse } from "@/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { userModule } from "@/database";
import i18n from "@/i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) {
  if (req.method == "GET") {
    i18n.changeLanguage(req.query.lang as string || "en");
    var username: string = "";
    var password: string = "";
    if (req.query.username && typeof req.query.username == "string") {
      username = req.query.username;
    }
    if (req.query.password && typeof req.query.password == "string") {
      password = req.query.password;
    }
    var userId: number = 0;
    await userModule.findOne({
      where: {
        username,
        password,
      },
    }).then(user => {
      if (user) {
        userId = user.getDataValue("userId");
      }
      else {
        API.failure(res, i18n.t("userNotFound"));
        return;
      }
    }).catch((error: Error) => {
      console.error(error);
      API.failure(res, i18n.t("databaseError"));
    });
    API.success(res, i18n.t("loginSuccess"), { userId });
  }
  else {
    API.failure(res, i18n.t("invalidMethod"));
  }
}
